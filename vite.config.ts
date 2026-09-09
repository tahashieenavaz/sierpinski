import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@stylesheets": path.resolve("stylesheets"),
    },
  },
});
