import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const baseHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
}

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  const csp = [
    "default-src 'self'",
    `script-src 'self' ${isDev ? "'unsafe-eval' 'unsafe-inline'" : ""}`,
    "style-src 'self' 'unsafe-inline'", 
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    `connect-src 'self' ${isDev ? "ws://localhost:* http://localhost:*" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].filter(Boolean).join('; ')

  return {
    plugins: [
      devtools(),
      tsconfigPaths({ projects: ['./tsconfig.json'] }),
      tailwindcss(),
      tanstackRouter({ target: 'react', autoCodeSplitting: true }),
      viteReact(),
    ],
    server: {
      headers: {
        ...baseHeaders,
        'Content-Security-Policy': csp,
      },
    },
    preview: {
      headers: {
        ...baseHeaders,
        'Content-Security-Policy': csp,
      },
    },
  }
})