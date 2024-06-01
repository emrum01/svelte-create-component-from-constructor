/// <reference types="vitest" />
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import type { UserConfig } from 'vite';
import { svelteTesting } from '@testing-library/svelte/vite';

const config: UserConfig = {
  plugins: [cssInjectedByJsPlugin(), svelte(), svelteTesting()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    include: ['**/*.test.ts'],
  },
  build: {
    lib: {
      entry: 'src/lib/button/createButton.ts',
      name: 'Svelte-create-component-from-constructorButton', // FIXME: 名称は後で調整
      fileName: 'svelte-create-component-from-constructor-sdk',
      formats: ['es'],
    },
  },
};

export default config;
