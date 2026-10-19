import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#060A1A',
          deep: '#060A1A',
          dark: '#0A1128',
          surface: '#101B3B',
          card: '#15224A',
          border: '#1C2B58',
          light: '#1A274E',
          subtle: '#233463',
        },
        blue: {
          DEFAULT: '#1C51D9',
          primary: '#1C51D9',
          light: '#2E65F3',
          dark: '#12389C',
          subtle: '#EFF4FF',
        },
        gold: {
          DEFAULT: '#C5A059',
          primary: '#C5A059',
          light: '#DFC07D',
          dark: '#9F7B36',
          subtle: 'rgba(197, 160, 89, 0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        'gold': '0 8px 24px rgba(197, 160, 89, 0.25)',
        'blue': '0 8px 24px rgba(28, 81, 217, 0.25)',
        'card': '0 10px 30px rgba(6, 10, 26, 0.08)',
        'modal': '0 25px 60px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
