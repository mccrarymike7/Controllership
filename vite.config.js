import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages: app is served at https://<user>.github.io/Controllership/
  base: process.env.NODE_ENV === 'production' ? '/Controllership/' : '/',
})
