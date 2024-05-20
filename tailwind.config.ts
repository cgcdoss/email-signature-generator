/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f0f7fe',
          '100': '#deecfb',
          '200': '#c4e0f9',
          '300': '#9bcdf5',
          '400': '#63adee ',
          '500': '#4893e9',
          '600': '#3376dd',
          '700': '#2a62cb',
          '800': '#2851a5',
          '900': '#264682',
          '950': '#1b2b50',
        },

      }
    }
  },

  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
  ]
};