/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        sage: {
          DEFAULT: '#6B8F71',
          light: '#8FAA95',
          dark: '#566F5C'
        },
        forest: {
          DEFAULT: '#2C5F2D',
          light: '#3D7A3E',
          dark: '#1F4420'
        },
        beige: {
          DEFAULT: '#FAF8F3',
          light: '#FFFCF7',
          dark: '#F0EBE3'
        }
      }
    }
  },
  plugins: []
}
