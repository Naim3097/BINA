#!/usr/bin/env node
/**
 * Wrapper for `payload generate:importmap`.
 *
 * Why it exists:
 *   Payload's CLI runs through tsx in true ESM mode, which requires explicit
 *   `.js` extensions on local TS imports AND `"type": "module"` in package.json.
 *   Next.js Turbopack with bundler resolution wants neither of those.
 *
 *   This script temporarily applies both transforms, runs the generator, then
 *   reverts so the rest of the project keeps building cleanly.
 *
 * Re-run any time you change collections, add custom admin components, or
 * change which storage adapter is enabled.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const configPath = path.join(root, "payload.config.ts");
const pkgPath = path.join(root, "package.json");

const originalConfig = readFileSync(configPath, "utf8");
const originalPkg = readFileSync(pkgPath, "utf8");

const restore = () => {
  writeFileSync(configPath, originalConfig);
  writeFileSync(pkgPath, originalPkg);
};

try {
  // 1. Add .js extensions to local imports in payload.config.ts
  const patchedConfig = originalConfig.replace(
    /from\s+"(\.\/[^"]+?)"/g,
    (_, p) => (p.endsWith(".js") ? `from "${p}"` : `from "${p}.js"`)
  );
  writeFileSync(configPath, patchedConfig);

  // 2. Add "type": "module" to package.json (if not already)
  const pkg = JSON.parse(originalPkg);
  if (pkg.type !== "module") {
    pkg.type = "module";
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
  }

  // 3. Run the generator
  const result = spawnSync("npx", ["payload", "generate:importmap"], {
    cwd: root,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    throw new Error(`payload generate:importmap exited with ${result.status}`);
  }
} finally {
  restore();
}

console.log("\nimportMap regenerated. payload.config.ts and package.json restored.");
