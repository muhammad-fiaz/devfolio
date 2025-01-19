import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import 'fumadocs-twoslash/twoslash.css';
import {source} from "@/lib/source";
import {notFound} from "next/navigation";
import {siteConfig} from "@/site.config";

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: `Documentations | ${siteConfig.name}`,
        description: siteConfig.description,
    }
}
const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
