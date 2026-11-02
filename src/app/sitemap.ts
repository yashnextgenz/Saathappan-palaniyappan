import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/services', '/contact', '/privacy', '/terms', '/credits'].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
