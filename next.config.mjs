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
    remotePatterns: [

      {
        protocol: 'https',
        hostname: '**',

      },
    ],

  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },

};

export default withMDX(nextConfig);
