import { DocsLayout, type DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import 'fumadocs-twoslash/twoslash.css';
import { source } from '@/lib/source';
import React from 'react';

// Define the sidebar tabs and dynamic transformation logic
const sidebarTabs = [
  {
    text: 'Projects',
    url: '/projects',
    title: 'Projects',
    description: 'Projects Documentations',
  },
  {
    text: 'Logly',
    url: 'content/projects/logly/v0.0.7',
    title: 'Logly',
    description: 'An logging utility',
  },
];

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: sidebarTabs,
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node);
        if (!meta) return option;

        return {
          ...option,
          icon: (
            <div
              className="from-fd-background/80 rounded-md border bg-gradient-to-t p-1 shadow-md [&_svg]:size-5"
              style={{
                color: `hsl(var(--${meta.file.dirname}-color))`,
                backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
              }}
            >
              {node.icon}
            </div>
          ),
        };
      },
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
