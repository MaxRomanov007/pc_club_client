import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: path.resolve(__dirname, './src/components/'),
      styles: path.resolve(__dirname, './src/styles/'),
      public: path.resolve(__dirname, './public/'),
      pages: path.resolve(__dirname, './src/pages'),
      types: path.resolve(__dirname, './src/@types/'),
    },
  },
});