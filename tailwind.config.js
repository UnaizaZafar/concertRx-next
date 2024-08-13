/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        
      screens: {
        'mobile': '375px',
        // => @media (min-width: 375px) { ... }
  
        'tablet': '744px',
        // => @media (min-width: 744px) { ... }
  
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
