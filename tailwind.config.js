module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "background-light": "url('/images/bg.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
