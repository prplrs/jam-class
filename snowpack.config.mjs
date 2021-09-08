export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: { out: "docs" },
  plugins: ["@snowpack/plugin-postcss"],
};
