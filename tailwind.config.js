/** @type {import('tailwindcss').Config} */

/**
 * # 커스터마이즈
 *  - font: index.html에 cdn 추가 => tailwind.config.js에 추가
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
