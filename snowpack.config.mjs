export default {
  mount: {
    public: "/",
    src: "/dist",
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: { out: "docs", baseUrl: "/jam-class", metaUrlPath: "vendor" },
  plugins: ["@snowpack/plugin-postcss"],
};
