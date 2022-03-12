module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
    // require('daisyui'),
    // require("kutty")
  ],
  daisyui: {
    styled: false,
    themes: false,
    base: true,
    utils: false,
    logs: false,
    rtl: false,
  },
}