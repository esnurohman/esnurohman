/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    container: {
      center: {
        "@apply mx-auto": true,
        // Tambahkan kelas custom lainnya sesuai kebutuhan
      },
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1e40af",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
