import { PROJECTS } from "./projects";

// Únicos, en orden de primera aparición — ninguna tecnología nueva, solo agregadas
export const SKILLS = [...new Set(PROJECTS.flatMap((p) => p.tags))];