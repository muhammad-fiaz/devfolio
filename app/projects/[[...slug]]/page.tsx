import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { getGithubLastEdit } from 'fumadocs-core/server';
import { siteConfig } from '@/site.config';
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // Fetch the last modified time
  const lastModified =
    process.env.NODE_ENV === 'development'
      ? null
      : await getGithubLastEdit({
          owner: siteConfig.links.github.username,
          repo: 'devfolio',
          path: `content/projects/${page.file.path}`,
          token: process.env.GIT_TOKEN
            ? `Bearer ${process.env.GIT_TOKEN}`
            : undefined,
        });
  const MDX = page.data.body;
  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
      editOnGithub={{
        owner: siteConfig.links.github.username,
        repo: 'devfolio',
        sha: 'main',
        path: `content/projects/${page.file.path}`,
      }}
      lastUpdate={
        lastModified ? new Date(lastModified).toLocaleString() : undefined
      }
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
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const formattedTitle = `${page.data.title} - ${page.file.dirname.split('/')[0].replace(/^./, (c) => c.toUpperCase())} | ${siteConfig.name}`;

  return {
    title: formattedTitle,
    description: page.data.description,
  };
}
