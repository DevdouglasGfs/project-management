import { defineConfig } from "astro/config";
import path from "node:path";
import { fileURLToPath } from "url";

import vue from "@astrojs/vue";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@pages/*": path.resolve(__dirname, "src/pages/*"),
        "@atomics/*": path.resolve(__dirname, "src/atomics/*"),
        "@components/*": path.resolve(__dirname, "src/components/*"),
        "@layouts/*": path.resolve(__dirname, "src/layouts/*"),
        "@styles/*": path.resolve(__dirname, "src/assets/css/*"),
        "@modules/*": path.resolve(__dirname, "src/modules/*"),
      },
    },
  },

  integrations: [vue()],
});
