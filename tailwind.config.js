/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      height: {
        xs: "0.063rem",
      },
      colors: {
        "custom-dark-blue": "#242A45",
        "custom-light-blue": "#5267DF",
        "custom-red": "#FA5959",
        "custom-gray": "#9194A2",
      },
      fontFamily: {
        "custom-family": "Rubik, sans-serif",
      },
      fontSize: {
        "custom-xx-small": "0.813rem",
        "custom-x-small": "0.875rem",
        "custom-small": "0.938rem",
        "custom-medium": "1rem",
        "custom-big": "1.125rem",
        "custom-x-big": "1.25rem",
        "custom-xx-big": "2rem",
        "custom-xxx-big": "3rem",
      },
      fontWeight: {
        "custom-regular": "400",
        "custom-bold": "500",
      },
      letterSpacing: {
        "extra-wide": ".5rem",
      },
    },
  },
  plugins: [],
};
