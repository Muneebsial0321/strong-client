/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Define paths for purging unused styles
    theme: {
      extend: {},
    },
    plugins: [],
    important: true, // Ensures all Tailwind classes have !important
  };
  