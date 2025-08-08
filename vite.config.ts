import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // ✅ Set the correct base for GitHub Pages
  base: "/southasianspotlight/",

  // ✅ Point Vite's root to your client folder
  root: path.resolve(__dirname, "client"),

  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "client/attached_assets"),
    },
  },

  build: {
    // ✅ Output to dist/public for your GH Pages deploy script
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"], // Prevent serving hidden files
    },
  },
});
