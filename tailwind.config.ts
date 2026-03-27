import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#FFF4EE",
          100: "#FFE4D0",
          200: "#FFC49E",
          300: "#FF9C6B",
          400: "#F97338",
          500: "#E8560F",
          600: "#C4501A",
          700: "#9E3D10",
          800: "#7A2D0B",
          900: "#561E08",
        },
        dark: {
          DEFAULT: "#1A2C3D",
          600: "#2E4459",
          700: "#243747",
          800: "#1A2C3D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-oswald)", "Oswald", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            a: {
              color: "#C4501A",
              "&:hover": { color: "#9E3D10" },
            },
            "h1, h2, h3, h4": {
              scrollMarginTop: "80px",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
