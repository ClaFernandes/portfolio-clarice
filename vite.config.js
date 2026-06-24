import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base tem de corresponder ao nome exacto do repositório no GitHub
  base: '/portfolio-clarice/',
})