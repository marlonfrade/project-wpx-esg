import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import sanity from "astro-sanity"; // https://astro.build/config

import tailwind from "@astrojs/tailwind"; // https://astro.build/config

import netlify from "@astrojs/netlify/functions"; // https://astro.build/config

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://wpxlocacao-esg.netlify.app/",
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [sitemap(), sanity({
    projectId: "xi9z9qtm",
    dataset: "production",
    apiVersion: "v2023-04-06",
    useCdn: true
  }), tailwind(), preact()],
  output: "static",
  adapter: netlify()
});