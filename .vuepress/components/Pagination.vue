<script>
export default {
  name: "pagination",
  props: {
    page: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 10
    },
    numberOfItems: {
      type: Number
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.numberOfItems / this.pageSize);
    },
    hasPrevious() {
      return this.page - 1 > 0;
    },
    hasNext() {
      return this.page + 1 <= this.pageCount;
    },
    next() {
      return this.page + 1;
    },
    previous() {
      return this.page - 1;
    }
  },
  methods: {
    isPage(page) {
      return page == this.page;
    }
  }
};
</script>

<template>
  <nav>
    <span v-if="hasPrevious" class="btn float-left">
      <router-link :to="{path: '/posts/' + this.previous}">Anterior</router-link>
    </span>
    <span v-else class="btn unactive float-left">Anterior</span>
    <span v-if="hasNext" class="btn float-right">
      <router-link :to="{path: '/posts/' + this.next}">Siguiente</router-link>
    </span>
    <span v-else class="btn unactive float-right">Siguiente</span>
  </nav>
</template>

<style lang="stylus" scoped>
@import '../theme/styles/index.styl';
</style>>