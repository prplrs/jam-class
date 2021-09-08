export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: { out: "docs", baseUrl: "/jam-class" },
  plugins: ["@snowpack/plugin-postcss"],
};
