import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      '3xl': {
        max: '1840px'
      },
      '2xl': {
        max: '1440px'
      },
      xl: {
        max: '1280px'
      },
      lg: {
        max: '1024px'
      },
      md: {
        max: '768px'
      },
      sm: {
        max: '480px'
      }
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1840px'
      }
    },
    extend: {
      colors: {
        black: '#070B10',
        white: '#F9F8F8',
        cyan: '#3ADCFF'
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'system-ui'],
        'sora': ['var(--font-sora)', 'system-ui'],
        'phosphate': ['var(--font-phosphate)', 'system-ui']
      },
      animation: {
        'button-loading-spinner': 'spin 0.75s ease-in-out infinite'
      },
      keyframes: {
        'button-loading-spinner': {
          from: { transform: 'rotate(0turn)' },
          to: { transform: 'rotate(1turn)' }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        '.flex-space-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      });
    })
  ]
};
export default config;
