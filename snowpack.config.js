// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css", ".pcss"], output: [".css"] },
    ],
  ],
  extends: "@sveltejs/snowpack-config",
  mount: {
    "src/components": "/_components",
  },
  alias: {
    $components: "./src/components",
  },
  buildOptions: {
    souceMaps: true,
  },
};
