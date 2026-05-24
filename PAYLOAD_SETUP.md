# Payload CMS — setup & deploy

The case-studies page is now driven by Payload CMS. Everything else on the
site is still code-edited (hardcoded in `app/(frontend)/`).

## Local development

1. **Provision Neon Postgres** — at https://console.neon.tech, create a project
   and copy the **pooled** connection string (looks like
   `postgresql://user:pass@ep-xxxx-pooler.region.aws.neon.tech/neondb?sslmode=require`).
2. **Generate a Payload secret**
   ```
   openssl rand -hex 32
   ```
3. **Provision Vercel Blob (optional locally)** — for purely local dev you can
   skip this and uploads will fail; the case-studies page still renders using
   the hardcoded fallback in `lib/projects.ts`. To enable uploads, in the
   Vercel dashboard go to Storage → Create → Blob, then grab the
   `BLOB_READ_WRITE_TOKEN` from the **.env.local** tab.
4. **Fill in `.env.local`**
   ```
   PAYLOAD_SECRET=<output of openssl command>
   DATABASE_URL=<your Neon pooled URL>
   BLOB_READ_WRITE_TOKEN=<your blob token>          # optional locally
   ADMIN_EMAIL=you@example.com                       # only used by the seed script
   ADMIN_PASSWORD=pick-a-strong-one
   ```
5. **Start dev server**
   ```
   npm run dev
   ```
6. **Seed the database** (one-time, populates Projects from `lib/projects*.ts`)
   ```
   npm run seed
   ```
   This creates the admin user (using `ADMIN_EMAIL` / `ADMIN_PASSWORD`),
   uploads all the project images into the Media collection, and creates 8
   project records with both EN and MS localized fields.
7. **Log in** at http://localhost:3000/admin

If you skip step 6, the admin still works — you'll just see an empty Projects
collection and the case-studies page will fall back to the hardcoded data in
`lib/projects.ts`.

## Editing content

In the admin:
- **Projects** — list view shows all 8. Click a row to edit.
  - Use the language toggle (top of the editor) to switch between editing
    English and Bahasa Malaysia content. Media + arrays are shared, only the
    text fields differ per locale.
  - To **add** a project: click "Create New", fill in EN content first, then
    flip to MS in the same record and translate.
  - To **remove**: open the project and use the kebab menu → Delete.
  - **`order`** controls grid position (lower numbers come first).
- **Media** — manage uploaded images. Anything dropped here goes to Vercel
  Blob; the URL it returns is what shows on the frontend.

Edits show up on `/case-studies/` and `/ms/case-studies/` within **60 seconds**
(set by `export const revalidate = 60` in those page files).

## Deploying to Vercel

1. Push the repo to GitHub.
2. In Vercel, **import** the project.
3. Add a **Storage** integration: Neon Postgres (Vercel will auto-set
   `DATABASE_URL`) AND Vercel Blob (auto-sets `BLOB_READ_WRITE_TOKEN`).
4. Add a manual environment variable: `PAYLOAD_SECRET` = same value as your
   `.env.local` (or generate a fresh one).
5. **Deploy.** First build will run migrations against Neon automatically.
6. **Seed** in production: pull the env locally with `vercel env pull`, then
   `npm run seed`. Or, skip the seed and add projects manually via the admin.

## Schema reference

The Projects collection lives in `payload/collections/Projects.ts`. Each
project has:

| Field | Type | Localized? | Notes |
|---|---|---|---|
| `slug` | text | no | URL-safe id, unique, e.g. `saujana` |
| `order` | number | no | Display order in the grid (asc) |
| `category` | select | no | `design-build` / `renovation` / `interior` |
| `showZoomIcon` | checkbox | no | Toggle the corner zoom icon on the card |
| `title`, `eyebrow`, `location`, `lead`, `priceLine`, `intent`, `planCaption` | text/textarea | **yes** | EN/MS via the editor's language toggle |
| `year` | text | no | Display year, e.g. `2024` |
| `heroImage`, `planImage` | upload (Media) | no | Card thumbnail + modal images |
| `specs[]` | array | inner fields localized | key/value rows for the modal facts list |
| `materials[]` | array | inner fields localized | material chips |
| `gallery[]` | array | inner caption localized | image + caption rows |
| `highlights[]` | array | `t` & `d` localized; `n` shared | numbered "What sets it apart" rows |

## Regenerating the admin import map

`app/(payload)/admin/importMap.js` is auto-generated. Re-run it when you:
- add or remove a collection,
- enable/disable a storage adapter,
- add custom admin components.

```
npm run generate:importmap
```

This calls a thin wrapper at `scripts/generate-importmap.mjs` that
temporarily switches the project to ESM mode for the duration of the
generator run (Payload's CLI requires `"type": "module"` + `.js` extensions
on local imports, which conflicts with Next.js Turbopack's bundler
resolution). The wrapper auto-reverts both changes — you don't have to.

> **Requires Node 22+.** The Payload-bundled undici 7.x crashes with a
> `CacheStorage` error on Node 20.x. If `node -v` shows 20.x, install Node 22
> (e.g. `brew install node@22` then run with
> `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run generate:importmap`).

## Troubleshooting

- **Admin loads but Projects is empty / shows 0 records** — the case-studies
  page automatically falls back to the hardcoded data in `lib/projects.ts`
  in this case. Run `npm run seed` once the DB is reachable.
- **Image uploads fail with 401** — `BLOB_READ_WRITE_TOKEN` is missing or
  invalid.
