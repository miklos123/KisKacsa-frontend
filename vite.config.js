import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: ' https://nodejs306.dszcbaross.edu.hu',
        changeOrigin: true
      }
    }
  }
})
