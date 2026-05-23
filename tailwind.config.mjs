/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'var(--color-navy)',
          dark: 'var(--color-navy-dark)',
        },
        green: {
          DEFAULT: 'var(--color-green)',
        },
        amber: {
          DEFAULT: 'var(--color-amber)',
          soft: 'var(--color-amber-soft)',
        },
        ink: 'var(--color-ink)',
        'text-mid': 'var(--color-text-mid)',
        'text-muted': 'var(--color-text-muted)',
        hairline: 'var(--color-hairline)',
        paper: 'var(--color-paper)',
        'row-alt': 'var(--color-row-alt)',
        'callout-green': 'var(--color-callout-green)',
        'callout-amber': 'var(--color-callout-amber)',
      },
      fontFamily: {
        sans: [
          'Helvetica',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['2.25rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h1-sm': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['1.75rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h2-sm': ['1.375rem', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['1.25rem', { lineHeight: '1.35', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        small: ['0.8125rem', { lineHeight: '1.5', fontWeight: '400' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '72rem',
        prose: '40rem',
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        card: '0.75rem',
      },
    },
  },
  plugins: [],
};
