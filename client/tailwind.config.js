/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // 'custom-blur': '0 4px 15px rgba(0, 0, 0, 0.5)',
        'custom-blur': '0 8px 30px rgba(135, 80, 247, 0.1)',
      },
      keyframes: {
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-5px)' },
        },
        marquee: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        bounceArrow: 'bounceArrow 0.6s ease-in-out infinite', 
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
      },
    },
  },
  plugins: [],
}