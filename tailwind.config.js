/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/preline/preline.js",
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}",
    "./src/app/**/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms')
  ],
}

