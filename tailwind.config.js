const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /flex-(row|col)/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /justify-/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /items-/, variants: ["sm", "md", "lg", "xl", "2xl"] },
    { pattern: /gap-/, variants: ["sm", "md", "lg", "xl", "2xl"] },
  ],

  theme: {
    fontFamily: {
      ...fontFamily,
      sans: [
        "Inter var",
        "Inter",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {},
  },
  plugins: [],
};
