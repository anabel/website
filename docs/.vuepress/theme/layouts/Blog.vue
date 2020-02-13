<template>
  <base-layout>
    <template
      #content
      v-bind:posts="this.posts"
      v-bind:page="this.page"
      v-bind:pageSize="this.pageSize"
    >
      <Posts :posts="posts" :page="page" :page-size="pageSize" />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";

export default {
  name: "Blog",
  props: {
    page: {
      type: Number,
      default: 1
    }
  },

  components: {
    BaseLayout
  },

  data() {
    return {
      pageSize: 5
    };
  },

  computed: {
    posts() {
      return this.$site.pages
        .filter(x => this.isAPost(x))
        .sort(
          (a, b) =>
            Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
        );
    }
  },

  methods: {
    isAPost(page) {
      return page.path.startsWith("/blog/") && !!page.frontmatter.date;
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/index.styl';
</style>
