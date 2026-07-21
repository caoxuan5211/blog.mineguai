import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  publicDir: "site-public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Only apply to client build
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('unified') || id.includes('remark') || id.includes('rehype')) {
              return 'markdown';
            }
            if (id.includes('shiki')) {
              return 'shiki';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 500
  }
});
