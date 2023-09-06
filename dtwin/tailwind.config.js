const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        magistral_b_i: "Magistral-BoldItalic",
        magistral_bk_i: "Magistral-BookItalic",
        magistral_l_i: "Magistral-LightItalic",
        magistral: "Magistral-Book",
        magistral_l: "Magistral-Light",
        magistral_b: "Magistral-Bold",
        magistral_medium: "Magistral-Medium",
      },
      colors: {
        bodydark2: "#8A99AF",
        bodydark1: "#DEE4EE",
        graydark: "#0F3A48",
        blacklight: "#1C2434",
        stroke: "#E2E8F0",
        meta3: "#10B981",
        primary: "#3C50E0",
        main_color: "#EE0033",
      },
    },
    screens: {
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1535px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1536px", max: "1765px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1766px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
