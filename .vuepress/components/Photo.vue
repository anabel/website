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
import { mediaQueries } from "@dynamic/tailwindMediaQueries.js";

export default {
  name: "photo",
  data() {
    return {
      mediaQueries: mediaQueries
    };
  },
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
  computed: {
    mediaConditions() {
      let conditions = new Map();
      for (const screen in mediaQueries) {
        if (mediaQueries.hasOwnProperty(screen)) {
          let condition = this.mediaCondition(mediaQueries[screen]);
          conditions.set(screen, condition);
        }
      }
      return conditions;
    }
  },
  methods: {
    media(breakpoint) {
      return this.mediaConditions.get(breakpoint);
    },
    src(breakpoint) {
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
    getImageUrl(filename) {
      try {
        return require("@images/" + filename);
      } catch (error) {}
    },
    mediaCondition(mediaQuery) {
      const mediaFeature = "width";
      let mediaCondition = [];
      for (const condition in mediaQuery) {
        let media = [];
        if (mediaQuery.hasOwnProperty(condition)) {
          media.push(condition.concat("-").concat(mediaFeature));
          let value = mediaQuery[condition];
          media.push(value);
        }
        mediaCondition.push(media.join(": "));
      }
      return "(".concat(mediaCondition.join(", ")).concat(")");
    }
  }
};
</script>