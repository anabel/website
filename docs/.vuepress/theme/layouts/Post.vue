<template>
  <div>
    <base-layout>
      <template #content v-bind:showComments="this.showComments()">
        <section class="theme-default-content">
          <Content />
          <Comments v-if="showComments" />
        </section>
      </template>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";

export default {
  name: "Post",
  components: {
    BaseLayout
  },
  methods: {
    showComments() {
      return !(this.$page.frontmatter.comments == false);
    }
  }
};
</script>