/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7C5DFA",
        "primary-dim": "#9277FF",
        danger: "#EC5757",
        "danger-dim": "#FF9797",
        surface: {
          light: "#F8F8FB",
          dark: "#141625",
        },
        "blue-muted": {
          50: "#F9FAFE",
          100: "#DFE3FA",
          300: "#888EB0",
          500: "#7E88C3",
        },
        dark: {
          600: "#373B53",
          700: "#252945",
          800: "#1E2139",
          950: "#0C0E16",
        },
      },
      fontSize: {
        "heading-sm": [
          "15px",
          { lineHeight: "24px", letterSpacing: "-0.25px" },
        ],
        "heading-sm-variant": [
          "15px",
          { lineHeight: "15px", letterSpacing: "-0.25px" },
        ],
        "heading-md": [
          "24px",
          { lineHeight: "22px", letterSpacing: "-0.75px" },
        ],
        "heading-lg": ["36px", { lineHeight: "33px", letterSpacing: "-1px" }],
        body: ["13px", { lineHeight: "18px", letterSpacing: "-0.1px" }],
        "body-variant": [
          "13px",
          { lineHeight: "15px", letterSpacing: "-0.25px" },
        ],
      },
    },
    fontFamily: {
      "league-spartan": "League Spartan",
    },
  },
  darkMode: "class",
  plugins: [],
};
