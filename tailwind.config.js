module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark-blue': 'var(--dark-blue)',
        'very-dark-blue': 'var(--very-dark-blue)',
        'very-dark-blue-light': 'var(--very-dark-blue-light)',
        'dark-gray': 'var(--dark-gray)',
        'very-light-gray': 'var(--very-light-gray)',
      },
    },
  },
  plugins: [],
}
