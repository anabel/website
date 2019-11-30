<template>
  <ul class="flex-1 max-w-xl mx-auto leading-normal">
    <li v-for="post in postsOfPage">
      <div v-html="post.excerpt"></div>
      <p
        class="metadata"
      >{{ publishDate(post.frontmatter.date) }} / {{ tags(post.frontmatter.tags) }}</p>
      <a class="btn inline-block" :href="post.path">Seguir leyendo</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "posts",
  props: {
    posts: {
      type: Array
    },
    page: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    postsOfPage() {
      let s = this.pageSize * (this.page - 1);
      let e = this.pageSize * this.page;
      return this.posts.slice(s, e); //slice does not include end [start, end)
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
    }
  }
};
</script>