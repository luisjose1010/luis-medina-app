import type { Config } from "tailwindcss";

/**
 * Palette roles
 * -------------
 * `brand`            → fixed teal surfaces (footer, solid buttons, cards over photos).
 *                      Never changes with the theme: those surfaces are dark in both.
 * `caribbean_current`/`dark_cyan`
 *                    → accent ramps driven by CSS variables. They brighten in dark mode
 *                      so accent text stays readable over the dark page.
 * `desert_sand`/`seasalt`/`dark_purple`
 *                    → fixed. Used for warm accents, text-on-dark and photo scrims.
 * `page`/`surface`/`ink`/`line`
 *                    → semantic tokens that flip between themes.
 */
const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const accentRamp = (family: string) => ({
  DEFAULT: withVar(`--${family}`),
  100: withVar(`--${family}-100`),
  200: withVar(`--${family}-200`),
  300: withVar(`--${family}-300`),
  400: withVar(`--${family}-400`),
  500: withVar(`--${family}-500`),
  600: withVar(`--${family}-600`),
  700: withVar(`--${family}-700`),
  800: withVar(`--${family}-800`),
  900: withVar(`--${family}-900`),
});

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
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
      fontFamily: {
        display: ["var(--font-display)", "serif"],
      },
      colors: {
        // Semantic, theme-aware
        page: withVar('--bg'),
        band: withVar('--band'),
        surface: withVar('--surface'),
        ink: withVar('--ink'),
        line: withVar('--line'),

        // Accents, theme-aware
        'caribbean_current': accentRamp('caribbean'),
        'dark_cyan': accentRamp('cyan'),

        // Fixed teal for surfaces that stay dark in both themes
        'brand': { DEFAULT: '#246a73', 100: '#071517', 200: '#0f2b2f', 300: '#164046', 400: '#1d565d', 500: '#246a73', 600: '#369dab', 700: '#5cbfcc', 800: '#92d4dd', 900: '#c9eaee' },

        // Fixed
        'desert_sand': { DEFAULT: '#ddbea8', 100: '#382416', 200: '#70482b', 300: '#A76c41', 400: '#c7946f', 500: '#ddbea8', 600: '#e4cab8', 700: '#ead8ca', 800: '#f1e5dc', 900: '#f8f2ed' },
        'seasalt': { DEFAULT: '#fcfaf9', 100: '#422c21', 200: '#855943', 300: '#b98A73', 400: '#dac2b6', 500: '#fcfaf9', 600: '#fcfafa', 700: '#fdfcfb', 800: '#fefdfc', 900: '#fefefe' },
        'dark_purple': { DEFAULT: '#160f29', 100: '#040308', 200: '#090610', 300: '#0d0919', 400: '#120c21', 500: '#160f29', 600: '#3A286b', 700: '#5d40ad', 800: '#917ace', 900: '#c8bde6' },
      },
    },
  },
  plugins: [],
};
export default config;
