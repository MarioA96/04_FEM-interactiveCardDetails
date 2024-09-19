import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro,svelte}', './pages/**/*.{ts,tsx,js,jsx,astro,svelte}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          spacegrotesk_variable: { value: 'var(--font-spacegrotesk-variable), sans-serif' },
          spacegrotesk_light: { value: 'var(--font-spacegrotesk-light), sans-serif' },
          spacegrotesk_regular: { value: 'var(--font-spacegrotesk-regular), sans-serif' },
          spacegrotesk_medium: { value: 'var(--font-spacegrotesk-medium), sans-serif' },
          spacegrotesk_semibold: { value: 'var(--font-spacegrotesk-semibold), sans-serif' },
          spacegrotesk_bold: { value: 'var(--font-spacegrotesk-bold), sans-serif' },
        }
      },
      breakpoints: {
        xsm: '340px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});
