import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#001F3F',
          900: '#002B52',
          800: '#003D6B',
          700: '#004E84',
          600: '#00609D',
          500: '#0073B6',
        },
        gold: {
          400: '#FFD700',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#9A7C0B',
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #001F3F 0%, #002B52 50%, #004E84 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
