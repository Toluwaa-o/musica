/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backdrop-filter: blur(15px);
      colors: {
        bgDark: "#1D2123",
        bgDarker: "#1A1E1F",
        accentGold: "#FACD66",
        accentGray: "#EFEEE040",
        textWhite: "#EFEEE0",
        barBg: "#1d21234d",
      },
      gridTemplateColumns: {
        layout: "minmax(auto, 7%) auto",
      },
      gridTemplateRows: {
        my_rows: "70% 30%",
        my_rows_2: "auto 45%",
      },
      borderColor: {
        myBorder: "rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        myBlur: "15px",
      },
    },
  },
  plugins: [],
};
