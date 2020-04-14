<template>
  <article>
    <h2>
      <a :href="this.post.path">{{this.post.title}}</a>
    </h2>
    <Photo
      v-if="!!this.post.frontmatter.thumbnail"
      :name="this.post.frontmatter.thumbnail.name"
      :alt="this.post.frontmatter.thumbnail.alt"
      :breakpoints="this.post.frontmatter.thumbnail.breakpoints"
      :class="this.thumbnailClasses()"
    />
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
  props: {
    post: {
      type: Object
    }
  },
  methods: {
    thumbnailClasses() {
      let thumbnailClasses = "thumbnail"
      if (!this.post.frontmatter.thumbnail.style) {
        return thumbnailClasses;
      }
      return thumbnailClasses.concat(" ").concat(this.post.frontmatter.thumbnail.style);
    }, 
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

<style lang="stylus">
.thumbnail img
  @apply w-full h-64 object-cover
.thumbnail.top img
  @apply object-top
.thumbnail.bottom img
  @apply object-bottom
.thumbnail.full img
  @apply h-auto
.thumbnail.screen img
  @apply h-screen
.thumbnail.center img
  @apply object-contain
</style>