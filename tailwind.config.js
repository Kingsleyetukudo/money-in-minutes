/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        90: "90%",
        500: "500px",
        654: "654px",
        400: "400px",
        62: "62%",
      },

      height: {
        600: "850px",
        400: "432px",
      },

      borderWidth: {
        25: "25px",
        50: "50px",
      },

      colors: {
        primaryBg: "#0F53FA",
        textColor: "#001F18",
        mobileNavBg: "#b4b8e686",
        emailBoxBg: "#50E3C1",
        loanColor: "#E9F7FE",
        headingColor: "#12114D",
      },

      fontFamily: {
        body: ["Nunito"],
      },

      screens: {
        navBarRes: { max: "991px" },
        secondNav: { min: "992px" },
        newScreen: { min: "767px", max: "1128px" },
        newSmallScreen: { max: "767px" },
        fourthHero: { max: "1000px" },
      },
    },
  },
  plugins: [],
};
