import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Multi-page build: privacy at "/", terms at "/terms".
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        terms: fileURLToPath(new URL('./terms.html', import.meta.url)),
      },
    },
  },
})
