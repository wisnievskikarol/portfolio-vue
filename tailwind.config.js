/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#141414',
          100: '#1a1a1a',
          200: '#222222',
          300: '#2a2a2a',
          400: '#333333'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.03)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.06)' }
        }
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  },
  plugins: []
}
