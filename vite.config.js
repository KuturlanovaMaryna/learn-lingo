import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    'process.env': process.env,
  },
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
