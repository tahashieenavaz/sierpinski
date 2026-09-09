import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@stylesheets": path.resolve(__dirname, "src/stylesheets"),
    },
  },
});
