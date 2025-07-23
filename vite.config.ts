import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import stylelint from 'vite-plugin-stylelint'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: 'src/app/routes',
    }),
    react(),
    stylelint({
      fix: true,
      include: ['**/*.{css,scss}'],
      exclude: ['node_modules', 'dist'],
    }),
  ],
})
