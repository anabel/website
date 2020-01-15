const path = require("path");
const tailwindConfig = require("../tailwind.config");

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
  },
  clientDynamicModules() {
    return {
      name: "tailwindMediaQueries.js",
      content: `export const mediaQueries = ${JSON.stringify(
        tailwindConfig.theme.screens
      )}`
    };
  }
};
