<template>
  <base-layout>
    <template #content>
      <vuepress-docs-adapter>
        <renderless-posts slot-scope="{ docs }" :page="page" :docs="docs">
          <section
            slot-scope="{ posts, hasNext, hasPrevious, next, previous }"
            class="theme-default-content"
          >
            <post-meta v-for="post in posts" :post="post" />
            <pagination
              :hasNext="hasNext"
              :hasPrevious="hasPrevious"
              :next="next"
              :previous="previous"
            />
          </section>
        </renderless-posts>
      </vuepress-docs-adapter>
    </template>
  </base-layout>
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
