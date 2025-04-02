import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["last 2 versions"],
          grid: true,
        }),
        cssnano({
          preset: [
            "default",
            {
              autoprefixer: false, // Оставляем префиксы нетронутыми
              discardUnused: false, // Не удаляем неиспользуемые стили
              reduceIdents: false, // Не сокращаем идентификаторы
            },
          ],
        }),
      ],
    },
  },
  crossDomain: true,
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true,
    },
    allowedHosts: [
      "commandplus-frontend-5gddei-a786c7-95-174-103-115.traefik.me",
      "sitetrialbox.ru",
      "command-plus.tech",
      "localhost",
    ],
  },
});
