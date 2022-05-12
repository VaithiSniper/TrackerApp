module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "10xl": "15rem",
      "20xl": "2rem",
      "21xl": "1.5rem",
    },
  },
  plugins: [require("daisyui")],
};
