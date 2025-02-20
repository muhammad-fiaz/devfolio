import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { attachFile } from 'fumadocs-openapi/server';
import { createOpenAPI } from 'fumadocs-openapi/server';

export const source = loader({
  baseUrl: '/projects',
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
  },
});

export const openapi = createOpenAPI();
