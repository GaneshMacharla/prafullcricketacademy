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
          dark: '#080d0a',
          card: '#0f1713',
          border: '#1f2e26',
          green: '#10b981',
          emerald: '#059669',
          bright: '#00f285',
          accent: '#22c55e',
          gold: '#eab308',
          red: '#e11d48',
          muted: '#8b9d94'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(0, 242, 133, 0.25)',
        'glow-lg': '0 0 40px -5px rgba(0, 242, 133, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
