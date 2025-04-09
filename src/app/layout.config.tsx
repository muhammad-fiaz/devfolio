import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { siteConfig } from '../../site.config';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/projects/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: siteConfig.name,
  },
  githubUrl: siteConfig.links.github_org,
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Projects',
      url: '/projects',
      active: 'nested-url',
    },
  ],
};