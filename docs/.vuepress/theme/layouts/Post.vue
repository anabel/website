<template>
  <div>
    <base-layout>
      <Content />
      <template v-if="this.showComments()" #bottom>
        <Comments />
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