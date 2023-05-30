const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodydark2: "#8A99AF",
        bodydark1: "#DEE4EE",
        graydark: "#0F3A48",
        blacklight: "#1C2434",
        stroke: "#E2E8F0",
        meta3: "#10B981",
        primary: "#3C50E0",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
