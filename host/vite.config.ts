import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  plugins: [react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      remotes:{
        '@remote':{
          external: 'http://localhost:3002/assets/remoteEntry.js',
          from: 'vite'
        }
      },
      shared: { react:{ singleton: true }, "react-dom":{ singleton: true } },
    })
  ]
})
