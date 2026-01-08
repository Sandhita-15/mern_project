import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Example plugin for React

// https://vitejs.dev/config/
export default defineConfig({
  // Project root directory (defaults to the directory where vite.config.js is located)
  root: process.cwd(),

  // Base public path when served in development or production
  base: '/',

  // List of plugins to use
  plugins: [react()],

  // Development server options
  server: {
    port: 5173, // Default port
    open: true, // Open app in the browser on server start
    host: 'localhost', // Specify which IP addresses the server should listen on
  },

  // Build options
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps
  },

  // Resolve options (e.g., setting up path aliases)
  resolve: {
    alias: {
      '@': '/src', // Alias for the 'src' directory
    },
  },

  // CSS pre-processor options
  css: {
    preprocessorOptions: {
      scss: {
        // Example of passing additional data to scss
        // additionalData: `$injectedColor: orange;`
      },
    },
  },
});