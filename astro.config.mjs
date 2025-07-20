import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cine.pgscom.es',
  base: '/',
  build: {
    assets: '_astro'
  }
});