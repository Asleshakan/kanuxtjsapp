export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  server: {
    port: process.env.PORT || 8080, // Ensure it uses port 8080 or any available port set in environment
    host: '0.0.0.0', // Bind to all available network interfaces
  },
})
