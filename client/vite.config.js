import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  // resolve: {
  //   alias: {
  //     "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
  //   },
  // },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
