import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
    vite: {
        ssr: {
            noExternal: ['modern-normalize', '@webtui/css', '@webtui/theme-catppuccin']
        }
    },
    experimental: { assets: true }
});