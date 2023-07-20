/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimgray: {
          "100": "#555",
          "200": "#525252",
          "300": "#4d4d4d",
        },
        gray: {
          "100": "#858585",
          "200": "#222",
          "300": "rgba(0, 0, 0, 0.16)",
        },
        black: "#000",
        "color-text": "#262729",
        lightskyblue: "#a9d6ff",
        blue: "#0000ee",
        lavender: "#d9edff",
        "light-text-color": "#fff",
        "rectangle-805": "#34a0a4",
        darkslategray: "#252b42",
        "rectangle-807": "#1a759f",
      },
      fontFamily: {
        "title-2": "'DM Sans'",
        belleza: "Belleza",
        link: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "13xl": "32px",
        xl: "20px",
        "45xl": "64px",
        "3xs": "10px",
        "2xs": "11px",
        "181xl": "200px",
        "81xl": "100px",
      },
    },
    fontSize: {
      smi: "0.81rem",
      base: "1rem",
      lg: "1.13rem",
      sm: "0.88rem",
      "21xl": "2.5rem",
      "9xl": "1.75rem",
      xl: "1.25rem",
      "37xl": "3.5rem",
      "13xl": "2rem",
      "3xl": "1.38rem",
      "17xl": "2.25rem",
      "base-7": "0.98rem",
      "2xl": "1.31rem",
      mini: "0.94rem",
      "11xl": "1.88rem",
      xs: "0.75rem",
      "23xl": "2.63rem",
      "7xl": "1.63rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
