/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./node_modules/zone.js/dist/zone.js', './src/test-setup.ts'],
    include: ['**/*.spec.ts'],
  },
});
