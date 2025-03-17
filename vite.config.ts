import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate", // Automatically update SW
      devOptions: {
        enabled: true, // Enable PWA in dev mode
      },
      manifest: {
        name: "My PWA App",
        short_name: "PWA",
        description: "A Vite-powered PWA",
        theme_color: "#ffffff",
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: "/search.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/search.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
    }),
    
  ],
})
