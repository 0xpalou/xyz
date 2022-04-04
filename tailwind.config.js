module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      dark: "#18181b",
      "dark-light": "#000437",
      warm: "rgba(245, 245, 244, .6)",
      paper: "#F5F5F4",
      primary: "#6d28d9",
      secondary: "#d946ef",
      tertiary: "#f59e0b",
    },
    fontFamily: {
      "script": "Imperial Script",
      "mono": "JetBrains Mono"
    },
    extend: {
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
        "14xl": "14rem",
        "15xl": "15rem",
        "16xl": "16rem",
      }
    },
  },
  plugins: [],
}
