import { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteConfig } from '../../site.config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await source.getPages(); // Fetch all documentation pages

  // Add homepage and projects pages to the sitemap with priority 1.0
  const homepageUrl = {
    url: siteConfig.baseUrl, // Homepage URL
    lastModified: new Date().toISOString(),
    priority: 1.0, // Set highest priority for homepage
  };

  // Correctly generate URLs for documentation pages using slugs with priority 1.0
  const sitemapUrls = pages.map((page) => ({
    url: `${siteConfig.baseUrl}/projects/${page.slugs.join('/')}`, // Join slugs properly
    lastModified: page.data?.lastModified || new Date().toISOString(), // Fallback to current date
    priority: 0.9, // Set priority for all documentation pages
  }));

  // Return all URLs, including the homepage and documentation pages with priority 1.0
  return [
    homepageUrl, // Include homepage with priority 1.0
    ...sitemapUrls, // Include documentation pages with priority 1.0
  ];
}
