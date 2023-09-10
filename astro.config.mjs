import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';

import { loadEnv } from "vite";
const { STORYBLOK_TOKEN } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: 'https://marcovidonis.com/',
  integrations: [
    sitemap(),
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        pageTitle: 'storyblok/PageTitle',
        pageSubtitle: 'storyblok/PageSubtitle',
        pageContent: 'storyblok/PageContent',
        image: 'storyblok/Image',
        datePublished: 'storyblok/DatePublished',
        // tag: 'storyblok/Tag',
        // imagePost: 'storyblok/ImagePost',
        // postsList: 'storyblok/PostsList',
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
