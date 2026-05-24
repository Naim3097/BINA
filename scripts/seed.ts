/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * One-shot seed script for the Projects collection.
 *
 * Reads the hardcoded data in lib/projects.ts (EN) and lib/projects.ms.ts (MS),
 * uploads every referenced image (local /public/* paths and remote Unsplash
 * URLs) into the Media collection, then creates one Project record per slug
 * with both EN + MS localized fields populated.
 *
 * Prerequisites:
 *   - DATABASE_URL, BLOB_READ_WRITE_TOKEN, PAYLOAD_SECRET set in .env.local
 *   - DB reachable (Neon's pooled connection string works)
 *
 * Run:    npm run seed
 *
 * Idempotency: re-running creates duplicate Media + Project rows. Truncate
 * `media` and `projects` tables first if you need a clean re-seed.
 */
// IMPORTANT: must be first — loads .env.local BEFORE any payload module is
// pulled in, because payload.config.ts reads process.env at evaluation time.
import "./load-env.js";

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getPayload } from "payload";
// tsx wraps the default export in an extra level when re-importing a TS file
// across packages — unwrap one level if present.
import payloadConfigImport from "../payload.config";
// @ts-expect-error unwrap tsx default-of-default
const payloadConfig = payloadConfigImport?.default ?? payloadConfigImport;
import { PROJECTS as PROJECTS_EN } from "../lib/projects";
import { PROJECTS_MS } from "../lib/projects.ms";
import { EN_CARDS } from "../components/CaseGrid";
import { MS_CARDS } from "../lib/projects.ms";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

type UploadFile = { data: Buffer; mimetype: string; name: string };

async function fetchImage(url: string): Promise<UploadFile> {
  if (url.startsWith("/")) {
    const filePath = path.join(projectRoot, "public", url);
    const data = readFileSync(filePath);
    const name = path.basename(url);
    const ext = path.extname(name).toLowerCase();
    const mimetype =
      ext === ".png"
        ? "image/png"
        : ext === ".jpg" || ext === ".jpeg"
        ? "image/jpeg"
        : ext === ".webp"
        ? "image/webp"
        : "application/octet-stream";
    return { data, mimetype, name };
  }
  const res = await fetch(url);
  if (!res.ok) {
    const err = new Error(`Fetch failed for ${url}: ${res.status}`) as Error & { code?: string };
    err.code = "FETCH_FAILED";
    throw err;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const mimetype = res.headers.get("content-type") ?? "image/jpeg";
  const baseName = path.basename(new URL(url).pathname) || `image-${Date.now()}.jpg`;
  return { data: buf, mimetype, name: baseName };
}

// Re-use uploaded images across multiple projects (same URL → same Media row).
const mediaCache = new Map<string, number | string>();
const failedUrls = new Set<string>();

async function uploadMedia(payload: any, url: string, alt: string): Promise<number | string | null> {
  const cached = mediaCache.get(url);
  if (cached) return cached;
  if (failedUrls.has(url)) return null;
  try {
    const file = await fetchImage(url);
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      file: { name: file.name, data: file.data, mimetype: file.mimetype, size: file.data.length },
    });
    mediaCache.set(url, doc.id);
    return doc.id;
  } catch (err) {
    console.warn(`  ⚠ Skipping image (${url.slice(0, 80)}): ${(err as Error).message}`);
    failedUrls.add(url);
    return null;
  }
}

function categoryFromEyebrow(eyebrow: string): "design-build" | "renovation" | "interior" {
  const e = eyebrow.toLowerCase();
  if (e.includes("renovation") || e.includes("renovasi")) return "renovation";
  if (e.includes("interior") || e.includes("dalaman")) return "interior";
  return "design-build";
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set. Aborting.");
    process.exit(1);
  }
  if (!process.env.PAYLOAD_SECRET) {
    console.error("PAYLOAD_SECRET is not set. Aborting.");
    process.exit(1);
  }

  const payload = await getPayload({ config: payloadConfig });

  // ---------- Admin user ----------
  const existing = await payload.find({ collection: "users", limit: 1 });
  if (!existing.docs.length) {
    const email = process.env.ADMIN_EMAIL ?? "admin@example.com";
    const password = process.env.ADMIN_PASSWORD ?? "changeme1234";
    await payload.create({ collection: "users", data: { email, password } });
    console.log(`✓ Created admin user: ${email}`);
    console.log(`  Password: ${password}`);
  } else {
    console.log("• Admin user already exists, skipping");
  }

  // ---------- Projects ----------
  const slugs = Object.keys(PROJECTS_EN);
  let order = 0;
  for (const slug of slugs) {
    order++;
    const en = PROJECTS_EN[slug];
    const ms = PROJECTS_MS[slug];
    const enCard = EN_CARDS.find((c) => c.id === slug);
    const msCard = MS_CARDS.find((c) => c.id === slug);

    console.log(`\n→ ${slug} (${en.title})`);

    // Idempotency — skip if a project with this slug already exists.
    const existing = await payload.find({
      collection: "projects",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (existing.docs.length) {
      console.log(`  • Already exists (id=${existing.docs[0].id}), skipping`);
      continue;
    }

    const heroId = await uploadMedia(payload, en.hero, en.title);
    const planId = await uploadMedia(payload, en.plan.img, en.plan.caption);
    if (!heroId || !planId) {
      console.warn(`  ⚠ Skipping project ${slug} — required hero or plan image failed to upload`);
      continue;
    }
    const galleryRowsRaw = await Promise.all(
      en.gallery.map(async (g) => {
        const image = await uploadMedia(payload, g.img, g.cap);
        return image ? { image, caption: g.cap } : null;
      })
    );
    const galleryRows = galleryRowsRaw.filter((r): r is { image: string | number; caption: string } => r !== null);

    const created: any = await payload.create({
      collection: "projects",
      locale: "en",
      data: {
        slug,
        order,
        category: categoryFromEyebrow(en.eyebrow),
        showZoomIcon: !!enCard?.zoom,
        title: en.title,
        eyebrow: en.eyebrow,
        location: en.location,
        year: en.year,
        priceLine: enCard?.priceLine ?? "",
        lead: en.lead,
        intent: en.intent,
        heroImage: heroId,
        planImage: planId,
        planCaption: en.plan.caption,
        specs: en.specs.map((s) => ({ k: s.k, v: s.v })),
        materials: en.materials.map((label) => ({ label })),
        gallery: galleryRows,
        highlights: en.highlights.map((h) => ({ n: h.n, t: h.t, d: h.d })),
      },
    });

    // Update with MS locale — preserves array row IDs from the EN creation so
    // localized fields inside each row get the MS text on the same row.
    if (ms) {
      // Re-fetch to get the IDs Payload generated for array rows.
      const fresh: any = await payload.findByID({
        collection: "projects",
        id: created.id,
        locale: "en",
        depth: 0,
      });

      const updateSpecs = fresh.specs.map((row: any, i: number) => ({
        id: row.id,
        k: ms.specs[i]?.k ?? row.k,
        v: ms.specs[i]?.v ?? row.v,
      }));
      const updateMaterials = fresh.materials.map((row: any, i: number) => ({
        id: row.id,
        label: ms.materials[i] ?? row.label,
      }));
      const updateGallery = fresh.gallery.map((row: any, i: number) => ({
        id: row.id,
        image: row.image,
        caption: ms.gallery[i]?.cap ?? row.caption,
      }));
      const updateHighlights = fresh.highlights.map((row: any, i: number) => ({
        id: row.id,
        n: ms.highlights[i]?.n ?? row.n,
        t: ms.highlights[i]?.t ?? row.t,
        d: ms.highlights[i]?.d ?? row.d,
      }));

      await payload.update({
        collection: "projects",
        id: created.id,
        locale: "ms",
        data: {
          title: ms.title,
          eyebrow: ms.eyebrow,
          location: ms.location,
          priceLine: msCard?.priceLine ?? "",
          lead: ms.lead,
          intent: ms.intent,
          planCaption: ms.plan.caption,
          specs: updateSpecs,
          materials: updateMaterials,
          gallery: updateGallery,
          highlights: updateHighlights,
        },
      });
      console.log(`  ✓ MS translation added`);
    } else {
      console.log(`  • No MS translation in source data, EN only`);
    }
  }

  console.log("\n✓ Seed complete.");
  console.log("  Log in at http://localhost:3000/admin");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
