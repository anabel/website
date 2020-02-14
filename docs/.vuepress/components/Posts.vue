<template>
  <section class="theme-default-content">
    <PostMeta v-for="post in postsOfPage" :post="post" />
    <Pagination :number-of-items="this.posts.length" :page-size="this.pageSize" :page="this.page" />
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array
    },
    page: {
      type: Number
    },
    pageSize: {
      type: Number
    }
  },
  computed: {
    postsOfPage() {
      let s = this.pageSize * (this.page - 1);
      let e = this.pageSize * this.page;
      return this.posts.slice(s, e); //slice does not include end [start, end)
    }
  }
};
</script>