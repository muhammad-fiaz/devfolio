import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import { openapi } from '@/lib/source';
import { getGithubLastEdit } from 'fumadocs-core/server';
import { siteConfig } from '@/site.config';
import { createTypeTable } from 'fumadocs-typescript/ui';
import React from 'react';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  // Fetch the last modified time
  const lastModified =
    process.env.NODE_ENV === 'development'
      ? null
      : await getGithubLastEdit({
          owner: siteConfig.links.github.username,
          repo: 'devfolio',
          path: `content/projects/${page.file.path}`,
          token: process.env.GIT_TOKEN ? `Bearer ${process.env.GIT_TOKEN}` : undefined,
        });
  const { AutoTypeTable } = createTypeTable();

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{
        owner: siteConfig.links.github.username,
        repo: 'devfolio',
        sha: 'main',
        path: `content/projects/${page.file.path}`,
      }}
      lastUpdate={lastModified ? new Date(lastModified).toLocaleString() : undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Popup,
            PopupContent,
            PopupTrigger,
            APIPage: openapi.APIPage,
            AutoTypeTable,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
