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
    },
  },
  plugins: [],
}