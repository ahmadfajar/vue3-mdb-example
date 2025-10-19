import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, 'src/bootstrap'),
  plugins: [vue()],
  resolve: {
    alias: {
      '@bs': fileURLToPath(new URL('./src/bootstrap', import.meta.url)),
      '@tw': fileURLToPath(new URL('./src/tailwind', import.meta.url)),
      '@shares': fileURLToPath(new URL('./src/shares', import.meta.url)),
    },
  },
});
