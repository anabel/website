const path = require("path");
const tailwindConfig = require("../tailwind.config");

module.exports = {
  title: "Anabel Barrio",
  description: "A vuepress blog that uses tailwind",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "Artículos", link: "/" },
      { text: "Sobre mí", link: "/about" },
      {
        text: "GitHub",
        link: "https://github.com/anabel/vuewind"
      }
    ]
  },
  postcss: {
    plugins: [require("tailwindcss"), require("autoprefixer")]
  },
  markdown: {
    anchor: { permalink: false }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "../blog/images"),
        "@videos": path.resolve(__dirname, "../blog/videos")
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
