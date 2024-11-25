import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

<<<<<<< Updated upstream
// https://vitejs.dev/config/
=======
>>>>>>> Stashed changes
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
<<<<<<< Updated upstream
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
=======
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
>>>>>>> Stashed changes
