import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG'],
  base: '/',
  build: {
    outDir: 'dist', // Default, but make sure it's set
    assetsDir: 'assets', // Keeps assets in an 'assets' folder
  },
})
