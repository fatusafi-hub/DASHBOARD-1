import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages: set `base` to "/<your-repo-name>/".
// Example: if repo is github.com/jewel/jba-events  ->  base: "/jba-events/"
export default defineConfig({
  plugins: [react()],
  base: "./",
});
