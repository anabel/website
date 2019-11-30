<script>
export default {
  name: "pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
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
    }
  }
};
</script>

<template>
  <ul class="flex-1 max-w-xl mx-auto leading-normal">
    <li v-for="page in pageCount" class="inline">
      <router-link :to="{path: '/posts/' + page}">{{page}}</router-link>
    </li>
  </ul>
</template>