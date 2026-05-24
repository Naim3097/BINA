// Re-exports the hardcoded EN cards + projects for use as a fallback when
// Payload isn't reachable. Keeps the existing data shipped with the codebase
// so the case-studies page never renders empty.
export { PROJECTS } from "./projects";
export { EN_CARDS as EN_CARDS_FALLBACK } from "@/components/CaseGrid";
