import type { MetadataRoute } from 'next';
import { siteConfig } from '../../site.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.jpg',
        sizes: 'any',
        type: 'image/jpg',
      },
    ],
  };
}
