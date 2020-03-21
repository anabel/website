<template>
  <BaseLayout>
    <template #content>
      <RenderlessPosts :page="page">
        <section
          slot-scope="{ posts, hasNext, hasPrevious, next, previous }"
          class="theme-default-content"
        >
          <PostMeta v-for="post in posts" :post="post" />
          <Pagination
            :hasNext="hasNext"
            :hasPrevious="hasPrevious"
            :next="next"
            :previous="previous"
          />
        </section>
      </RenderlessPosts>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";

export default {
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  components: {
    BaseLayout
  }
};
</script>

<style lang="stylus">
@import '../styles/index.styl';
</style>
