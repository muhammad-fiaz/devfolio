import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { attachFile } from 'fumadocs-openapi/server';
import { createOpenAPI } from 'fumadocs-openapi/server';

export const source = loader({
  baseUrl: '/projects',
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  },
});

export const openapi = createOpenAPI({
  // options
});
