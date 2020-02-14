<template>
  <BaseLayout>
    <template #content v-bind:page="this.page" v-bind:pageSize="this.pageSize">
      <RenderlessPosts>
        <div slot-scope="{ posts }">
          <Posts :posts="posts" :page="page" :page-size="pageSize" />
        </div>
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
  },

  data() {
    return {
      pageSize: 5
    };
  }
};
</script>

<style lang="stylus">
@import '../styles/index.styl';
</style>
