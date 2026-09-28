import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base + HashRouter lets the build run from any path
// (GitHub Pages project URL, custom domain, or a subfolder).
export default defineConfig({
  plugins: [react()],
  base: './'
});
