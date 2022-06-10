const primaryColor = "#FF3850";
const bgColor = "#111012";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "head-logo": "url('../public/him.png') ",
        "main-img": "url('../images/build.jpg')",
      },
      fontFamily: {
        "clicker-script": ["Clicker Script", "cursive"],
      },
      colors: {
        primary: primaryColor,
        bgColor,
      },
      borderRadius: {
        layout: "1rem",
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fade: "fade .5s ease-in-out",
        scaleIn: "scaleIn .35s ease-in-out",
      },
    },
  },
  plugins: [],
};