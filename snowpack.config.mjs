export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: ["@snowpack/plugin-postcss"],
};
