import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://YaeloMaximoff.github.io',
  base: '/PagWebTrening',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});