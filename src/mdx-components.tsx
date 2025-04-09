import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Popup,
    PopupContent,
    PopupTrigger,
    ...components,
  };
}
