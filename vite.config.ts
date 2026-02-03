import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin que resolve importações figma:asset sem precisar de arquivos reais
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Retorna um ID marcado como external/virtual
        return '\0' + id
      }
      return null
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        // Durante o build, retorna uma imagem placeholder em base64 (1x1 pixel transparente)
        // Durante dev, o Figma Make injeta as imagens reais
        const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        return `export default "${placeholderImage}"`
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})