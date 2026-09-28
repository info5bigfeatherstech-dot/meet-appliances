/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: 'var(--brand-blue)',
            deep: 'var(--brand-blue-deep)',
            navy: 'var(--brand-blue-navy)',
            subtle: 'var(--brand-blue-subtle)',
          },
          green: {
            DEFAULT: 'var(--brand-green)',
            soft: 'var(--brand-green-soft)',
            emerald: '#74C043',
          },
          gray: {
            bg: 'var(--brand-gray-bg)',
            border: 'var(--brand-gray-border)',
            muted: 'var(--brand-gray-muted)',
            text: 'var(--brand-gray-text)',
            dark: '#091B33',
            card: '#FFFFFF',
          },
        },
      },
      fontFamily: {
        heading: ['"Open Sans"', 'sans-serif'],
        subheading: ['"Neue Montreal"', '"Montserrat"', 'sans-serif'],
        subhead: ['"Neue Montreal"', '"Montserrat"', 'sans-serif'],
        montreal: ['"Neue Montreal"', '"Montserrat"', 'sans-serif'],
        montserrat: ['"Montserrat"', '"Neue Montreal"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '500',
        bold: '600',
        extrabold: '700',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 104, 180, 0.08)',
        'card': '0 20px 40px -15px rgba(9, 27, 51, 0.07)',
        'card-hover': '0 28px 60px -15px rgba(0, 104, 180, 0.18)',
        'glow-blue': '0 0 35px -5px rgba(0, 104, 180, 0.35)',
        'glow-green': '0 0 30px -5px rgba(116, 192, 67, 0.45)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 14s infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
