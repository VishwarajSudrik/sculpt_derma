/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Medical Aesthetic Theme
        primary: {
          50: '#F5EFE8',    // Soft Beige Background
          100: '#F5EFE8',   // Soft Section Background
          200: '#E8DFD3',   // Lighter beige
          300: '#D4C4B0',   // Medium beige
          400: '#C8A27A',   // Accent Gold
          500: '#B88A5A',   // Button / Highlight Warm Gold
          600: '#A67C52',   // Darker gold
          700: '#8B6239',   // Deep gold
          800: '#6B4E31',   // Darkest gold
          900: '#5A4028',   // Deepest gold
        },
        secondary: {
          50: '#FFFFFF',    // Primary Background White
          100: '#FFFFFF',   // White
          200: '#F2F2F2',   // Light Gray UI background
          300: '#E5E5E5',   // Light gray
          400: '#D4D4D4',   // Medium gray
          500: '#A3A3A3',   // Gray
          600: '#737373',   // Dark gray
          700: '#525252',   // Darker gray
          800: '#404040',   // Very dark gray
          900: '#1A1A1A',   // Primary Text Dark Charcoal / Black
        },
        accent: {
          50: '#FDF8F3',    // Very light gold
          100: '#FAF0E6',   // Light gold
          200: '#F5EFE8',   // Soft beige
          300: '#E8DFD3',   // Light beige
          400: '#C8A27A',   // Accent Gold
          500: '#B88A5A',   // Button / Highlight Warm Gold
          600: '#A67C52',   // Darker gold
          700: '#8B6239',   // Deep gold
          800: '#6B4E31',   // Darkest gold
          900: '#5A4028',   // Deepest gold
        },
        // Legacy color names for backward compatibility
        medical: {
          50: '#F5EFE8',    // Soft Beige Background
          100: '#F5EFE8',   // Soft Section Background
          200: '#E8DFD3',   // Lighter beige
          300: '#D4C4B0',   // Medium beige
          400: '#C8A27A',   // Accent Gold
          500: '#B88A5A',   // Button / Highlight Warm Gold
          600: '#A67C52',   // Darker gold
          700: '#8B6239',   // Deep gold
          800: '#6B4E31',   // Darkest gold
          900: '#5A4028',   // Deepest gold
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
