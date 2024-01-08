import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/upload": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/upload/, ""),
    //   },
    // },
    // cors: true,
    // port: 80,
  },
});
