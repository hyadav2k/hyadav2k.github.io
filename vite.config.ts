import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://hyadav2k.github.io/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
