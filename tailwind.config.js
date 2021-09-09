module.exports = {
  mode: "jit",
  purge: ["./public/**/*.*", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "6rem",
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
