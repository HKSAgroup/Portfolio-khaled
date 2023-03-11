/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#04AADD",
          secondary: "#0063F7",
          accent: "#DFFBFF",
          neutral: "#7D82A1",
          "base-100": "#ffffff",
          info: "#183B56",
          success: "#06C270",
          warning: "#ff8b2c",
          error: "#FF3B3B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
