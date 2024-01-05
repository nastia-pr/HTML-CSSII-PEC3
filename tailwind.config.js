/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        headerBackground: '#0067aa',
        contactBackground: "#edfffa80",
        cardsBackground: "#91d3f0",
        linkHover: '#9aff5c',
        readMoreHover: '#0e02b8',
        footerBackground: '#05498e',
        contactInput: "#72d3ff40",
        contactFormText: '#ff3cf6',
        contactMapText: "#00fbf8"
      },

      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

