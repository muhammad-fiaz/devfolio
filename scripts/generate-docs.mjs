import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./unkey.json'], // the OpenAPI schemas
  output: './content/docs',
});
