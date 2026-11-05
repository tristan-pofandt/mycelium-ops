// Mycelium Ops prototype 1: the app lives in src/demo, builds into ../demo/dist and is served by ../demo/server.py.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const DEMO_API = process.env.DEMO_API_URL || "http://127.0.0.1:8200";

export default defineConfig({
  root: fileURLToPath(new URL("./src/demo", import.meta.url)),
  publicDir: fileURLToPath(new URL("./public", import.meta.url)), // the main site's icons and app-shell service worker
  plugins: [react()],
  test: { root: fileURLToPath(new URL(".", import.meta.url)), environment: "jsdom", include: ["src/**/*.test.{js,jsx}"], setupFiles: ["src/test-setup.js"] },
  build: { outDir: fileURLToPath(new URL("../demo/dist", import.meta.url)), emptyOutDir: true },
  server: { host: "127.0.0.1", port: 5174, proxy: { "/api": DEMO_API } },
});
