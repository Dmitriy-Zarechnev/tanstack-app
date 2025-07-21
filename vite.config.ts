import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true,
      include: ['**/*.{css,scss}'],
      exclude: ['node_modules', 'dist'],
    }),
  ],
})
