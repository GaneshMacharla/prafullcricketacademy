/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        cricket: {
          dark: '#060b08',
          deep: '#040705',
          card: '#0c1611',
          border: '#1b2c21',
          green: '#10b981',
          emerald: '#059669',
          bright: '#00f285',
          accent: '#22c55e',
          gold: '#f59e0b',
          amber: '#fbbf24',
          red: '#e11d48',
          muted: '#8e9f95',
          light: '#f1f5f9',
        },
        csk: {
          yellow: '#F5C400',
          gold: '#FFDD00',
          navy: '#154D70',
          blue: '#03639F',
          darkNavy: '#0c1e2e',
        },
        cb: {
          navy: '#0b1622',
          panel: '#102133',
          card: '#0e1b29',
          green: '#00c853',
          border: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Outfit', 'sans-serif'],
        heading: ['Barlow', 'Outfit', 'sans-serif'],
        athletic: ['"Barlow Condensed"', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 242, 133, 0.3)',
        'glow-lg': '0 0 45px -5px rgba(0, 242, 133, 0.45)',
        'glow-gold': '0 0 30px -5px rgba(245, 196, 0, 0.35)',
        'card-elevated': '0 12px 36px -6px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      letterSpacing: {
        'athletic': '0.04em',
        'athletic-wide': '0.08em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      }
    },
  },
  plugins: [],
}
