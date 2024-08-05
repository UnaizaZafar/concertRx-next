/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'bg-img':"url(/Rectangle 335.svg)"
      },
      listStyleType: {
      'tick':'✓'
      }
    },
  },
  plugins: [],
};
