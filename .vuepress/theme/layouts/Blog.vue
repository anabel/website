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
      pageSize: 5
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
  <div class="main-content">
    <header class="flex inline-flex">
      <h1>Anabel Barrio</h1>
    </header>
    <Posts :posts="this.posts" :page="this.page" :page-size="this.pageSize" />
  </div>
</template>

<style lang="stylus">
@import '../styles/index.styl';
</style>