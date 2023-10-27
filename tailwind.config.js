/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container :
    {
      center: true,
      padding: '1.25rem',
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

