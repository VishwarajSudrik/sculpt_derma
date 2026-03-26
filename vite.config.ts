import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.indexOf('react') !== -1 || id.indexOf('react-dom') !== -1) {
            return 'vendor'
          }
          if (id.indexOf('react-router-dom') !== -1) {
            return 'router'
          }
          if (id.indexOf('lucide-react') !== -1) {
            return 'icons'
          }
          if (id.indexOf('framer-motion') !== -1) {
            return 'motion'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
