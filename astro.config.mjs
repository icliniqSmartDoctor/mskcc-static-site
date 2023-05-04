import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    mode: "advanced"
  }),
  integrations: [react(), tailwind(),
  , partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), 
]
});