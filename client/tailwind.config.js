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
  plugins: [
    function ({addUtilities}) {
    const newUtibilites = {
      /* Hide scrollbar for Chrome, Safari and Opera */
      ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
      },
     /* Hide scrollbar for IE, Edge and Firefox */
      '.no-scrollbar' : {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none'  /* Firefox */
    }
  };
  addUtilities(newUtibilites);
},
  ],
};

