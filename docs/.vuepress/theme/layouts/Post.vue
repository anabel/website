<template>
  <div>
    <base-layout>
      <template #content v-bind:showComments="this.showComments()">
        <section class="theme-default-content">
          <Content />
          <comments v-if="showComments" />
        </section>
      </template>
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";

export default {
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