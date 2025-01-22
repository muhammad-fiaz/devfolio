// site.config.ts

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  author: string;
  baseUrl: string;
  links: {
    github: {
      username: string;
      url: string;
    };
    github_org: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Fiaz Technologies', // The name of your site
  shortName: 'Docs', // The short name of your site
  description:
    'This site serves as a centralized resource for users to explore technical guides, setup instructions, usage examples, and contributions to my open-source projects.',
  author: 'Muhammad Fiaz', // Author name
  baseUrl: 'https://projects.muhammadfiaz.com', // Base URL for your site
  links: {
    // Fixed the syntax here
    github: {
      username: 'muhammad-fiaz',
      url: 'https://github.com/muhammad-fiaz',
    },
    github_org: 'https://github.com/fiaztechnologies',
  },
};
