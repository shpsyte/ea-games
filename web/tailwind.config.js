/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '320px',
      // => @media (min-width: 320px) { ... }
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        primary: '#1D2125',
        column: '#22272B',
        secondary: '#161A1D',
        tertiary: '#cccccc',
        white: '#B6C2CF',
      },
      fontFamily: {
        sans: ['roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        stripes:
          'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 12.5%, transparent 12.5%, transparent )',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
