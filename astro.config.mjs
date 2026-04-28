import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://YaeloMaximoff.github.io',
  base: '/PagWebTrening',
  integrations: [tailwind()],
});