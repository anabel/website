<script>
export default {
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
  },
  render() {
    return this.$scopedSlots.default({
      posts: this.posts
    });
  }
};
</script>