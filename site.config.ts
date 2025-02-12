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
    discord?: string;
    github_org: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Fiaz Technologies',
  shortName: 'Docs',
  description:
    'This site serves as a centralized resource for users to explore technical guides, setup instructions, usage examples, and contributions to my open-source projects.',
  author: 'Muhammad Fiaz',
  baseUrl: 'https://docs.muhammadfiaz.com',
  links: {
    github: {
      username: 'muhammad-fiaz',
      url: 'https://github.com/muhammad-fiaz',
    },
    github_org: 'https://github.com/fiaztechnologies',
  },
};
