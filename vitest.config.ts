import { defineVitestConfig } from 'nuxt-vitest/config';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'pathe';
const root = fileURLToPath(new URL('./', import.meta.url));

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: root,
      },
    },
    // reporters: ['html', 'json', 'default'],
    globals: true,
    coverage: {
      provider: 'istanbul', // or 'v8',
      reporter: ['json', 'html'],
    },
    // setupFiles: ['./vitest.setup.ts']
  },
  define: {
    'process.env.test': 'true',
  },
  plugins: [],
  root,
});
