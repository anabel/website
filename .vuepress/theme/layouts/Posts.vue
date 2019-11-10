<script>
  export default {
    name: 'Blog',
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => isAPost(x))
          .sort(
            (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          )
      }
    },
    methods: {
      publishDate(date) {
          const moment = require('moment')
          moment.locale('es-ES')
          return moment(date).format('LLLL')
      },
      tags(tags) {
        return tags.toString();
      }
    }
  }
  function isAPost(page) {
    return page.path.startsWith("/blog/") && page.frontmatter.date
  }
</script>

<template>
  <ul class="flex-1 max-w-xl mx-auto leading-normal">
    <li v-for="post in posts">
      <h1><router-link :to="post.path">{{ post.title }}</router-link></h1>
      <p> {{ post.frontmatter.excerpt }} </p>
      <p class="metadata"> {{ publishDate(post.frontmatter.date) }} / {{ tags(post.frontmatter.tags) }}  </p>
    </li>
  </ul>
</template>

<style lang="stylus">
@import '../styles/theme.styl';
</style>