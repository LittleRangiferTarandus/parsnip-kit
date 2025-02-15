import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  test: {
    exclude: ["node_modules", "dist", "script"],
    coverage: {
      exclude: ["node_modules", "dist", "script"],
      include: ["packages"]
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/main.ts'),
      name: 'parsnip-kit',
      fileName: 'parsnip-kit',
      formats: ['es', 'umd', 'cjs']
    },
  },
})