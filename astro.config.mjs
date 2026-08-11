import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sourabhsahoo.com',
  redirects: {
    '/blog': '/blog/research',
  },
});
