// @ts-check
import { defineConfig } from 'astro/config';
import nekoweb from '@indiefellas/astro-adapter-nekoweb';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  adapter: nekoweb({
      apiKey: '19bd9382bc368708918219ad764a94f76dc8092b36b577bfccbe0decf67c967d',
      // cookie: 'cf02c33302a931562db0f28374c62bd884fd56a12cce6522d847b2e9a02f252b',
      folder: 'indiefellas_test'
  }),

  integrations: [svelte()]
});