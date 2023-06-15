import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@animations": path.resolve(__dirname, "src/animations"),
      "@components": path.resolve(__dirname, "src/components"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@views": path.resolve(__dirname, "src/views"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
      "@themes": path.resolve(__dirname, "src/themes"),
    },
  },
  server: {
    host: true,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});

// https://vitejs.dev/config/
