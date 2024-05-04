/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    css: false,
  },
  resolve: {
    alias: {
      '': path.resolve(__dirname, './'),
      pages: path.resolve(__dirname, '/pages'),
      components: path.resolve(__dirname, '/components'),
      types: path.resolve(__dirname, '/types'),
      assets: path.resolve(__dirname, '/assets'),
      hooks: path.resolve(__dirname, '/hooks'),
      public: path.resolve(__dirname, '/public'),
      utils: path.resolve(__dirname, '/utils'),
    },
  },
});
