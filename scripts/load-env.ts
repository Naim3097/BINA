// Loaded as a side-effect at the top of seed.ts BEFORE any payload imports.
// Required because ESM hoists imports — by the time payload.config.ts runs
// inline `process.env.PAYLOAD_SECRET || ""`, the env file must already be
// parsed. Putting dotenv.config() in the seed body after the imports is too
// late.
import { config } from "dotenv";
config({ path: ".env.local" });
