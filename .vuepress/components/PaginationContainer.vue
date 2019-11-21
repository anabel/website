<template>
  <Pagination :page-count="pageCount" />
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  name: "pagination-container",
  data() {
    return {};
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
      return this.posts.length % 2;
    }
  },
  methods: {
    isAPost(page) {
      return page.path.startsWith("/blog/") && page.frontmatter.date;
    }
  },
  components: {
    Pagination
  }
};
</script>