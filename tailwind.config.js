/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        90: "90%",
      },

      colors: {
        primaryBg: "#0F53FA",
        textColor: "#001F18",
        mobileNavBg: "#b4b8e686",
      },

      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
