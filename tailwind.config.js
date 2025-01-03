/** @type {import('tailwindcss').Config} */
import flowbitPlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat"],
    },
  },
  plugins: [flowbitPlugin],
};
