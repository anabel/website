<script>
export default {
  name: "Blog",
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pageSize: 2
    };
  },
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
    isAPost(page) {
      return page.path.startsWith("/blog/") && page.frontmatter.date;
    }
  }
};
</script>

<template>
  <div>
    <Posts :posts="this.posts" :page="this.page" :page-size="this.pageSize" />
    <Pagination :number-of-items="this.posts.length" :page-size="this.pageSize" :page="this.page" />
  </div>
</template>

<style lang="stylus">
@import '../styles/theme.styl';
</style>