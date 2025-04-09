import { generateOGImage } from 'fumadocs-ui/og';
import { metadataImage } from '@/lib/metadata';
import { siteConfig } from '../../../../site.config';

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: siteConfig.name,
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
