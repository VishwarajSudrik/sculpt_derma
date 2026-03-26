/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Medical Aesthetic Theme - Refined
        primary: {
          50: '#FDFCFB',    // Soft Alabaster
          100: '#F8F3ED',   // Champagne Background
          200: '#EFE5D8',   // Lighter beige-gold
          300: '#DCC9B1',   // Medium beige-gold
          400: '#C5A070',   // Warm Gold
          500: '#B88A5A',   // Main Brand Gold
          600: '#A1784B',   // Darker Gold
          700: '#8A653F',   // Deep Gold
          800: '#6D4E30',   // Shadow Gold
          900: '#4D3622',   // Deepest Gold
        },
        secondary: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#0F0F0B',   // Deep Charcoal Onyx
        },
        accent: {
          50: '#FAF7F2',
          100: '#F2ECE1',
          200: '#E5D6C1',
          300: '#D8C1A1',
          400: '#CBAA81',    // Rose Gold touch
          500: '#B88A5A',
          600: '#A67C52',
          700: '#8B6239',
          800: '#6B4E31',
          900: '#5A4028',
        },
        // Premium Medical Specifics
        medical: {
          gold: '#C5A070',
          onyx: '#0F0F0B',
          pearl: '#FDFCFB',
          silk: '#F8F3ED',
        }
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        'display': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A070 0%, #B88A5A 50%, #8A653F 100%)',
        'soft-gradient': 'linear-gradient(180deg, #FDFCFB 0%, #F8F3ED 100%)',
      },
      boxShadow: {
        'premium': '0 20px 50px -10px rgba(184, 138, 90, 0.15)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}

