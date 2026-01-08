import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,  // or '0.0.0.0' - exposes to all network interfaces
    allowedHosts: ["mern-project-frontend-3735.onrender.com"]
  }
})