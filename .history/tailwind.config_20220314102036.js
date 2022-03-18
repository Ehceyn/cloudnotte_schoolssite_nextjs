const tailwindcss = require("tailwindcss");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {},
    screens: {
      xs: "460px",
      // => @media (min-width: 460px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      md2: "1000px",
      // => @media (min-width: 900px) { ... }

      md3: "1124px",
      // => @media (min-width: 1034px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
