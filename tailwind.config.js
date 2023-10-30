/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
      agbalumo: ['Agbalumo', 'sans-serif'],
      merriweather: ['Merriweather', 'sans-serif'],
    },
    fontSize: {
      90: [
        '5.625rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      60: [
        '3.75rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      50: [
        '3.125rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      40: [
        '2.5rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      38: [
        '2.375rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      36: [
        '2.25rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      32: [
        '2.0rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      30: [
        '1.875rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      28: [
        '1.75rem',
        {
          fontWeight: '500',
          lineHeight: '110%',
        },
      ],
      26: [
        '1.625rem',
        {
          fontWeight: '500',
        },
      ],
      25: [
        '1.563rem',
        {
          fontWeight: '500',
        },
      ],
      22: [
        '1.375rem',
        {
          fontWeight: '500',
        },
      ],
      20: [
        '1.25rem',
        {
          fontWeight: '500',
        },
      ],
      18: [
        '1.125rem',
        {
          fontWeight: '500',
        },
      ],
      16: [
        '1rem',
        {
          fontWeight: '500',
        },
      ],
      14: [
        '0.875rem',
        {
          fontWeight: '500',
        },
      ],
      12: [
        '0.75rem',
        {
          fontWeight: '500',
        },
      ],
    },
    extend: {
      screens: {
        sm: '640px',
        lg: '1280px',
        xl: '1980px',
      },
      colors: {
        black_75: '#1f1e1e',
        white_75: '#7E1CFF',
      },
    },
  },
  plugins: [],
};
