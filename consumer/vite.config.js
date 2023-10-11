
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    watch: true,
    target: 'esnext',
    sourcemap: true,
    minify: 'terser',
  },
  plugins: [
  ],
})
