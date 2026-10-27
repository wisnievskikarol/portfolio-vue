/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Maślany tokens; values live as CSS variables in src/assets/main.css
      colors: {
        surface: {
          DEFAULT: 'var(--surface-100)',
          glow: 'var(--surface-glow)'
        },
        butter: 'var(--butter)',
        'on-butter': 'var(--on-butter)',
        yolk: 'var(--yolk)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)'
        },
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        hairline: 'var(--hairline)',
        scrim: 'var(--scrim)'
      },
      fontSize: {
        statement: ['45px', { lineHeight: '50px', letterSpacing: '-0.01em' }],
        'statement-sm': ['30px', { lineHeight: '36px', letterSpacing: '-0.01em' }],
        body: ['17px', '26px'],
        label: ['16px', '20px'],
        eyebrow: ['15px', '20px'],
        'card-title': ['22px', { lineHeight: '26px', fontWeight: '500' }],
        caption: ['13px', '18px']
      },
      borderRadius: {
        card: '24px',
        pill: '999px'
      }
    },
    fontFamily: {
      sans: ['"Hanken Grotesk"', '"Helvetica Neue"', 'Arial', 'sans-serif']
    }
  },
  plugins: []
}
