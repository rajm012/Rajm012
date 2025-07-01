// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  // content: ['./index.html', './src/**/*.{js,jsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Light mode
        purple: {
          50: '#FAF5FF',
        },
        indigo: {
          100: '#E0E7FF',
          900: '#1E1B4B',
        },
        violet: {
          300: '#C4B5FD',
          500: '#8B5CF6',
        },
        gray: {
          600: '#6B7280',
        },
        
        // For backward compatibility
        backgroundLight: '#FAF5FF',
        backgroundDark: '#1E1B4B',
        textLight: '#1E1B4B',
        textDark: '#E0E7FF',
        accentLight: '#8B5CF6',
        accentDark: '#C4B5FD',
        cardDark: '#312E81',
        borderDark: '#312E81',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#1E1B4B',
            a: {
              color: '#8B5CF6',
              '&:hover': {
                color: '#7C3AED',
              },
            },
            h1: {
              color: '#1E1B4B',
            },
            h2: {
              color: '#1E1B4B',
            },
            h3: {
              color: '#1E1B4B',
            },
            h4: {
              color: '#1E1B4B',
            },
            strong: {
              color: '#1E1B4B',
            },
            blockquote: {
              color: '#4B5563',
              borderLeftColor: '#8B5CF6',
            },
            code: {
              color: '#8B5CF6',
            },
            pre: {
              backgroundColor: '#F3F4F6',
              color: '#1F2937',
            },
          },
        },
        dark: {
          css: {
            color: '#E0E7FF',
            a: {
              color: '#C4B5FD',
              '&:hover': {
                color: '#DDD6FE',
              },
            },
            h1: {
              color: '#E0E7FF',
            },
            h2: {
              color: '#E0E7FF',
            },
            h3: {
              color: '#E0E7FF',
            },
            h4: {
              color: '#E0E7FF',
            },
            strong: {
              color: '#E0E7FF',
            },
            blockquote: {
              color: '#A5B4FC',
              borderLeftColor: '#C4B5FD',
            },
            code: {
              color: '#C4B5FD',
            },
            pre: {
              backgroundColor: '#312E81',
              color: '#E0E7FF',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

