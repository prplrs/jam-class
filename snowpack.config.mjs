export default {
  mount: {
    docs: "/",
    src: "/dist",
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: ["@snowpack/plugin-postcss"],
};
