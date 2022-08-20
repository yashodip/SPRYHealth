module.exports = {
  plugins: {
    "postcss-preset-env": {},
    "postcss-import": {},
    tailwindcss: { config: "./tailwind.config.js" },
    autoprefixer: {},
    "postcss-nested": {},
    "postcss-easy-import": { prefix: "_", extensions: [".css", ".scss"] },
  },
}
