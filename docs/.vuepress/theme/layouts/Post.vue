<template>
  <div>
    <BaseLayout>
      <template #content v-bind:showComments="this.showComments()">
        <section class="theme-default-content">
          <Content />
          <Comments v-if="showComments" />
        </section>
      </template>
    </BaseLayout>
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