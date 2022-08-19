module.exports = {
  plugins: {
    "postcss-preset-env": {},
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-nested": {},
    "postcss-easy-import": { prefix: "_", extensions: [".css", ".scss"] },
  },
}
