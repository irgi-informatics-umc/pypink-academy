import type { APIRoute } from 'astro';
import lessons from '../data/lessons.json';
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://pypink.academy');
  const paths = ['', 'belajar/', 'latihan/', 'cheatsheet/', 'playground/', 'tentang/', ...lessons.map((lesson) => `belajar/${lesson.slug}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${new URL(path, base)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
