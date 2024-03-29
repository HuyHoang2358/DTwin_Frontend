const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        sarabun_bold_italic: "Sarabun-BoldItalic",
        sarabun_bold: "Sarabun-Bold",
        sarabun_regular: "Sarabun-Regular",
        sarabun_medium: "Sarabun-Medium",
        sarabun_light: "Sarabun-Light",
        sarabun_extra_light: "Sarabun-ExtraLight",
        sarabun_medium_italic: "Sarabun-MediumItalic",
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
