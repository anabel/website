<script>
export default {
  name: "Blog",
  data() {
    return {
      page: 1,
      pagination: 2
    };
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => this.isAPost(x))
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    pageCount() {
      return Math.ceil(this.posts.length / this.pagination);
    },
    postsOfPage() {
      let s = this.pagination * (this.page - 1);
      let e = this.pagination * this.page;
      return this.posts.slice(s, e); //slice does not include end [start, end)
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
  <Posts :posts="postsOfPage" />
</template>

<style lang="stylus">
@import '../styles/theme.styl';
</style>