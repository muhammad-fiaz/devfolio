import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const currentYear = new Date().getFullYear();

const config: DocsThemeConfig = {
  logo: <span>Muhammad Fiaz</span>,
  project: {
    link: 'https://github.com/muhammad-fiaz/',
  },

  docsRepositoryBase: 'https://github.com/muhammad-fiaz/muhammad-fiaz.github.io/',
  footer: {
    text: `Copyright © Muhammad Fiaz ${currentYear}`,
  },
};

export default config;
