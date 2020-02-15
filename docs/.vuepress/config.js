const path = require("path");
const tailwindConfig = require("./tailwind.config");

module.exports = {
  title: "Anabel Barrio",
  description: "A vuepress blog that uses tailwind",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    sidebar: "auto",
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
    plugins: [
      require("tailwindcss")(path.resolve(__dirname, "./tailwind.config.js")),
      require("autoprefixer")
    ]
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
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-59982746-1"
      }
    ],
    [
      "sitemap",
      {
        hostname: "https://anabelbarrio.com",
        exclude: ["/404.html"]
      }
    ]
  ]
};
