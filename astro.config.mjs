import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: { format: 'directory' },
  site: 'https://pypink.academy',
  markdown: { shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
});
