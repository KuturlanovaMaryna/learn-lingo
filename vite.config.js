import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
    },
  },
  base: '/learn-lingo',
});
