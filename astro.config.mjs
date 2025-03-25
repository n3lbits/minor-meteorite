// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import markdoc from "@astrojs/markdoc";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), markdoc(), mdx()]
});