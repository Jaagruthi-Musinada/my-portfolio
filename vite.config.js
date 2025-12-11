import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Detect GitHub Pages environment
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/my-portfolio/" : "/",  // GitHub Pages vs Vercel
});
