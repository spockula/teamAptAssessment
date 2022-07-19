/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
     display: ['hover', 'focus', 'group-hover'],
     fill: ['hover', 'focus'],
    }
  },
  plugins: [
  ],
}
