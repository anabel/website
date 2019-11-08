module.exports = {
    title: "Anabel Barrio",
    description: "A vuepress blog that uses tailwind",
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  }