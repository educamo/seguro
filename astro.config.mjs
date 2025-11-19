// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Si el sitio se despliega en https://usuario.github.io/mi-proyecto/
const BASE_PATH = '/seguro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  // Establece el prefijo de ruta para el despliegue
  base: BASE_PATH, 

  // (Recomendado) Define la URL completa de tu sitio para sitemap y canonical URLs
  site: 'https://educamo.github.io', // **SIN** el subdirectorio final
});