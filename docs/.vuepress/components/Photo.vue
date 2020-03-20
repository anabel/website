<template>
  <picture>
    <source
      v-for="breakpoint in this.breakpoints"
      :srcset="url(filename(breakpoint))"
      :media="media(breakpoint)"
    />
    <img :src="url(this.name)" :alt="this.alt" />
  </picture>
</template>

<script>
import { mediaConditions } from "./twMediaQueryAdapter";
import { url } from "./urlUtils";

export default {
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
      return mediaConditions.get(breakpoint);
    },
    filename(breakpoint) {
      const separator = ".";
      if (!this.name.includes(separator)) {
        return this.name;
      }
      let filename = this.name.split(separator);
      return [filename[0], breakpoint]
        .join("_")
        .concat(separator)
        .concat(filename[1]);
    },
    url
  }
};
</script>