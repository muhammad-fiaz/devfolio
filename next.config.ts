import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config: import('next').NextConfig = {
  reactStrictMode: true,
};

export default withMDX(config);