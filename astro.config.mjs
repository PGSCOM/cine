import { defineConfig } from 'astro/config';
import muro from './integrations/muro.mjs';

export default defineConfig({
  site: 'https://cine.pgscom.es',
  base: '/',
  build: {
    assets: '_astro'
  },
  // Genera dist/muro.webp (imagen del proyecto en pgscom.es) y dist/og.jpg
  integrations: [muro()]
});
