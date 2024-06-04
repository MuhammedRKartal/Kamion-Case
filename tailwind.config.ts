import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Axiforma", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#0A2468",
          100: "#7EAFE8",
          300: "#7BB9FA",
          400: "#0F5FBD",
          800: "#092256",
        },
        gray: {
          100: "#FAFAFA",
          300: "#F6F6F6",
          400: "#BDC7D1",
          500: "#E3E6EE",
          700: "#93979B",
        },
        error: {
          DEFAULT: "#E9344C",
        },
      },
      maxWidth: {
        min: "320px",
        xs: "480px",
        sm: "720px",
        md: "960px",
        lg: "1300px",
        xl: "1600px",
        xxl: "1920px",
      },
      screens: {
        xxl: "1440px",
        xl: "1200px",
        lg: "960px",
        md: "720px",
        sm: "480px",
        xs: "390px",
      },
    },
  },
  plugins: [],
};
export default config;
