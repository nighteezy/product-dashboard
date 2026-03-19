import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      styles: path.resolve(__dirname, "./src/styles"),
      api: path.resolve(__dirname, "./src/api"),
      components: path.resolve(__dirname, "./src/components"),
      features: path.resolve(__dirname, "./src/features"),
      assets: path.resolve(__dirname, "./src/assets"),
      routes: path.resolve(__dirname, "./src/routes"),
      src: path.resolve(__dirname, "./src"),
    },
  },
});
