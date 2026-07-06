/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        verdits: {
          navy: '#071b3d',
          ink: '#0B2F66',
          teal: '#18A67D',
          mint: '#E2F8F1',
          bg: '#EEF6FA',
          section: '#F7FBFD',
          card: '#FFFFFF',
          line: '#CDE5F0',
          accent: '#18A67D',
          text: '#38557A',
        },
      },
      boxShadow: {
        glow: '0 18px 40px rgba(7, 27, 61, 0.16)',
        teal: '0 18px 34px rgba(32, 163, 125, 0.18)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #071B3D 0%, #0B5C7B 52%, #18A67D 100%)',
        'dark-radial':
          'radial-gradient(circle at top left, rgba(24,166,125,0.16), transparent 32%), radial-gradient(circle at top right, rgba(7,27,61,0.09), transparent 30%), linear-gradient(180deg, #F8FCFE 0%, #EEF6FA 100%)',
      },
    },
  },
  plugins: [],
};
