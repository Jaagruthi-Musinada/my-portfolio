import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect if building for GitHub Pages
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? "/my-portfolio/" : "/", // Correct base handling
});
