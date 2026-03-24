// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Modo 'static' para generación estática de todas las páginas
export default defineConfig({
   site: 'https://satelite30.github.io',
  base: '/blog-static-popular-esmedellinDev-',
  output: 'static'
});