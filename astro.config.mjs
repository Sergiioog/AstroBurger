import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  fonts: {
    custom: {
      families: ['Recoleta'],
      urls: ['fonts/Recoleta.otf']
    }
  },
  integrations: [tailwind(), react()]
});