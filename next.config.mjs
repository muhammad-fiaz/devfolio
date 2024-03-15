/**
 * @type {import('next').NextConfig}
 */
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com","avatars.githubusercontent.com","private-user-images.githubusercontent.com"],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX(nextConfig);
