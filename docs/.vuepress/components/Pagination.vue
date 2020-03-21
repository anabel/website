<template>
  <nav class="pagination">
    <span v-if="hasPrevious()" class="btn float-left">
      <router-link :to="{path: '/posts/' + previous}">Anterior</router-link>
    </span>
    <span v-else class="btn unactive float-left">Anterior</span>
    <span v-if="hasNext()" class="btn float-right">
      <router-link :to="{path: '/posts/' + next}">Siguiente</router-link>
    </span>
    <span v-else class="btn unactive float-right">Siguiente</span>
  </nav>
</template>
<script>
export default {
  props: {
    previous: Number,
    next: Number,
    hasPrevious: Function,
    hasNext: Function
  }
};
</script>