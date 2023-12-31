/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, tailwindScrollbar],
  daisyui: {
    themes: false,
    base: false,
  },
};
