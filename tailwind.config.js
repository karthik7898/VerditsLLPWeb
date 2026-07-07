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
          navy: '#050505',
          ink: '#1C1B17',
          teal: '#E8CE57',
          gold: '#F7DE63',
          goldSoft: '#FFF4B8',
          mint: '#FFF8DA',
          bg: '#F9F5E8',
          section: '#FFFDF3',
          card: '#FFFFFF',
          line: '#E9D889',
          accent: '#F7DE63',
          text: '#494536',
        },
      },
      boxShadow: {
        glow: '0 18px 40px rgba(5, 5, 5, 0.18)',
        teal: '0 18px 34px rgba(247, 222, 99, 0.3)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #050505 0%, #16140F 58%, #3A321A 100%)',
        'dark-radial':
          'radial-gradient(circle at top left, rgba(247,222,99,0.3), transparent 34%), radial-gradient(circle at top right, rgba(5,5,5,0.07), transparent 30%), linear-gradient(180deg, #FFFDF3 0%, #F9F5E8 100%)',
      },
    },
  },
  plugins: [],
};
