const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [flowbite.content(),'./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
}
