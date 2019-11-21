<script>
export default {
  name: "Blog",
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => this.isAPost(x))
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  },
  methods: {
    publishDate(date) {
      const moment = require("moment");
      moment.locale("es-ES");
      return moment(date).format("LLLL");
    },
    tags(tags) {
      return tags.toString();
    },
    isAPost(page) {
      return page.path.startsWith("/blog/") && page.frontmatter.date;
    }
  }
};
</script>

<template>
  <div>
    <ul class="flex-1 max-w-xl mx-auto leading-normal">
      <li v-for="post in posts">
        <div v-html="post.excerpt"></div>
        <p
          class="metadata"
        >{{ publishDate(post.frontmatter.date) }} / {{ tags(post.frontmatter.tags) }}</p>
        <a class="btn inline-block" :href="post.path">Seguir leyendo</a>
      </li>
    </ul>
    <PaginationContainer />
  </div>
</template>

<style lang="stylus">
@import '../styles/theme.styl';
</style>