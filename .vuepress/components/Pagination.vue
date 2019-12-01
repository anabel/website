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
  <ul class="flex-1 max-w-xl mx-auto leading-normal mt-10">
    <li>
      <span v-if="hasPrevious" class="link text">
        <router-link :to="{path: '/posts/' + this.previous}">Anterior</router-link>
      </span>
      <span v-else class="link text unactive">Anterior</span>
    </li>
    <li v-for="page in pageCount">
      <span v-if="isPage(page)" class="selected number">{{page}}</span>
      <span v-else class="link number">
        <router-link :to="{path: '/posts/' + page}">{{page}}</router-link>
      </span>
    </li>
    <li>
      <span v-if="hasNext" class="link">
        <router-link :to="{path: '/posts/' + this.next}">Siguiente</router-link>
      </span>
      <span v-else class="link unactive">Siguiente</span>
    </li>
  </ul>
</template>

<style lang="stylus" scoped>
@import '../theme/styles/theme.styl';

ul {
  font-size: 0;
}

.link {
  @apply text-gray-600 py-2 px-3 border border-gray-600;}

.selected {
  @apply btn py-2 px-3 border border-gray-600;}

.link.unactive {
  @apply text-gray-500 border-gray-500;}

li {
  @apply inline text-sm font-sans;}
</style>>