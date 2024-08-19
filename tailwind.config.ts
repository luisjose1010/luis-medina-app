import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'caribbean_current': { DEFAULT: '#246a73', 100: '#071517', 200: '#0f2b2f', 300: '#164046', 400: '#1d565d', 500: '#246a73', 600: '#369dab', 700: '#5cbfcc', 800: '#92d4dd', 900: '#c9eaee' },
        'dark_cyan': { DEFAULT: '#368f8b', 100: '#0b1d1c', 200: '#163a38', 300: '#215754', 400: '#2c7370', 500: '#368f8b', 600: '#4bbbb5', 700: '#78ccc7', 800: '#A5ddda', 900: '#d2eeec' },
        'desert_sand': { DEFAULT: '#ddbea8', 100: '#382416', 200: '#70482b', 300: '#A76c41', 400: '#c7946f', 500: '#ddbea8', 600: '#e4cab8', 700: '#ead8ca', 800: '#f1e5dc', 900: '#f8f2ed' },
        'seasalt': { DEFAULT: '#fcfaf9', 100: '#422c21', 200: '#855943', 300: '#b98A73', 400: '#dac2b6', 500: '#fcfaf9', 600: '#fcfafa', 700: '#fdfcfb', 800: '#fefdfc', 900: '#fefefe' },
        'dark_purple': { DEFAULT: '#160f29', 100: '#040308', 200: '#090610', 300: '#0d0919', 400: '#120c21', 500: '#160f29', 600: '#3A286b', 700: '#5d40ad', 800: '#917ace', 900: '#c8bde6' },
      },
    },
  },
  plugins: [],
};
export default config;
