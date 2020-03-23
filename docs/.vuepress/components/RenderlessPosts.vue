<script>
const POST = "Post";
export default {
  data() {
    return {
      pageSize: 5
    };
  },
  props: {
    docs: {
      type: Array
    },
    page: {
      type: Number
    }
  },
  computed: {
    posts() {
      return this.docs.filter(x => this.isAPost(x));
    },
    postsByDate() {
      return this.posts.sort(
        (a, b) =>
          Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
      );
    },
    postsOfPage() {
      let s = this.pageSize * (this.page - 1);
      let e = this.pageSize * this.page;
      return this.postsByDate.slice(s, e); //slice does not include end [start, end)
    },
    pageCount() {
      return Math.ceil(this.posts.length / this.pageSize);
    },
    next() {
      if (!this.hasNext()) {
        return this.page;
      }
      return this.page + 1;
    },
    previous() {
      if (!this.hasPrevious()) {
        return this.page;
      }
      return this.page - 1;
    }
  },
  methods: {
    isAPost(page) {
      return page.frontmatter.layout === POST;
    },
    hasPrevious() {
      return this.page - 1 > 0;
    },
    hasNext() {
      return this.page + 1 <= this.pageCount;
    }
  },
  render() {
    return this.$scopedSlots.default({
      posts: this.postsOfPage,
      next: this.next,
      previous: this.previous,
      hasNext: this.hasNext,
      hasPrevious: this.hasPrevious
    });
  }
};
</script>