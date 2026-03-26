import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const baseHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-DNS-Prefetch-Control': 'off',
}

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  const csp = [
    "default-src 'none'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'", 
    "img-src 'self' data: https:",
    "font-src 'self' data:",

    isDev 
      ? "connect-src 'self' ws://localhost:* http://localhost:*" 
      : "connect-src 'self' https://your-api-domain.com", 
    
    "object-src 'none'",
    "base-uri 'self'",
    "manifest-src 'self'",
    "frame-src 'self'",
    "form-action 'self'", 
    "frame-ancestors 'none'", 
    !isDev && "upgrade-insecure-requests",
  ]
    .filter(Boolean)
    .join('; ')

  return {
    plugins: [
      devtools(),
      tsconfigPaths({ projects: ['./tsconfig.json'] }),
      tailwindcss(),
      tanstackRouter({ target: 'react', autoCodeSplitting: true }),
      viteReact(),
    ],
    server: {
      port: 5173, 
      headers: {
        ...baseHeaders,
        'Content-Security-Policy': csp,
      },
    },
    preview: {
      port: 4173, 
      headers: {
        ...baseHeaders,
        'Content-Security-Policy': csp,
      },
    },
  }
})