<template>
  <article>
    <h2>
      <a :href="this.post.path">{{this.post.title}}</a>
    </h2>
    <p>{{this.post.frontmatter.excerpt}}</p>
    <aside>
      <p
        class="metadata"
      >{{ publishDate(this.post.frontmatter.date) }} / {{ tags(post.frontmatter.tags) }}</p>
    </aside>
    <a class="btn inline-block" :href="this.post.path">Seguir leyendo</a>
  </article>
</template>

<script>
export default {
  name: "post-meta",
  props: {
    post: {
      type: Object
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