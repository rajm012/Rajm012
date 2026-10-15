import defaultTheme from 'tailwindcss/defaultTheme';

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', sm: '1.5rem' }, screens: { '2xl': '1120px' } },
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        fg: token('fg'),
        muted: token('muted'),
        subtle: token('subtle'),
        line: token('line'),
        accent: token('accent'),
        'accent-fg': token('accent-fg'),
        'accent-soft': token('accent-soft'),
      },
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
        serif: ['"Newsreader Variable"', ...defaultTheme.fontFamily.serif],
        mono: ['"JetBrains Mono Variable"', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: { prose: '62ch' },
      keyframes: {
        rise: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { rise: 'rise .5s cubic-bezier(.2,.7,.2,1) both' },
    },
  },
  plugins: [],
};
