module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "25rem",
      tablet: "48rem",
      desktop: "90rem",
      large: "120rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      yellow: "#F0A719",
      pink: "#F877DC",
      brown: "#BB7F0C",
      black: { 100: "#171515", 200: "#000" },
      white: {
        100: "#FFFFFF",
        200: "#ECECEC",
        300: "#FAFAFA",
      },
      blue: {
        100: "#0A3A97",
        200: "#0F58E6",
        300: "#0F58E5 ",
        400: "#82AAF7",
      },
      red: {
        100: "##C90707",
        200: "#F81D1D",
        300: "#F98888",
        400: "#ED0C57",
        500: "#93B9D2",
      },
      gray: {
        100: "#999999",
        200: "#CCCCCC",
        300: "#ECECEC",
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "0.9rem" }],

      base: ["1rem", { lineHeight: "1.5rem" }],
      md: ["1.5rem", { lineHeight: "1.8rem" }],
      lg: ["2.25rem", { lineHeight: "2.7rem" }],
      xl: ["3rem", { lineHeight: "3.6rem" }],
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
