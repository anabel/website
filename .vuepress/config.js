const path = require("path");

module.exports = {
  title: "Anabel Barrio",
  description: "A vuepress blog that uses tailwind",
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")]
  },
  markdown: {
    anchor: { permalink: false }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "../blog/images")
      }
    }
  }
};
