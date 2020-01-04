<template>
  <picture v-if="breakpoints">
    <source
      v-for="breakpoint in this.breakpoints"
      :srcset="getImageUrl(src(breakpoint))"
      :media="media(breakpoint)"
    />
    <img :src="getImageUrl(this.name)" :alt="this.alt" />
  </picture>
  <img v-else :src="getImageUrl(this.name)" :alt="this.alt" />
</template>

<script>
const mediaCondition = "max-width";
const separator = ".";

export default {
  name: "photo",
  props: {
    name: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    breakpoints: {
      type: Array
    }
  },
  methods: {
    media(breakpoint) {
      return "("
        .concat(mediaCondition)
        .concat(": ")
        .concat(this.$mediaQueries.get(breakpoint))
        .concat(")");
    },
    src(breakpoint) {
      if (!this.name.includes(separator)) {
        return this.name;
      }
      let filename = this.name.split(separator);
      return [filename[0], breakpoint]
        .join("_")
        .concat(separator)
        .concat(filename[1]);
    },
    getImageUrl(filename) {
      try {
        return require("@images/" + filename);
      } catch (error) {}
    }
  }
};
</script>