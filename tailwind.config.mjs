/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
        kalam: ['"Kalam"', "cursive"],
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        /* typingsecond: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        }, */
      },
      animation: {
        typing: "typing 4s",
        /* typingsecond: "typing 2s forwards 2s" // Delays by 2 seconds , */
      },
    },
  },
  plugins: [],
};
