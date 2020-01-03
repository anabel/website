<template>
  <picture>
    <source
      v-for="breakpoint in this.breakpoints"
      :srcset="getImageUrl(src(breakpoint))"
      :media="media(breakpoint)"
    />
    <img :src="getImageUrl(this.name)" :alt="this.alt" />
  </picture>
</template>

<script>
const mediaCondition = "max-width";
const separator = ".";

export default {
  name: "photo",
  data() {
    return {
      mediaQueries: {
        type: Object
      }
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
    customBreakpoints: {
      type: Array
    }
  },
  computed: {
    defaultBreakpoints() {
      return Object.keys(this.mediaQueries);
    },
    breakpoints() {
      if (this.customBreakpoints) {
        return this.customBreakpoints;
      }
      return this.defaultBreakpoints;
    }
  },
  methods: {
    media(breakpoint) {
      let viewport = this.mediaQueries[breakpoint];
      return "("
        .concat(mediaCondition)
        .concat(": ")
        .concat(viewport)
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
  },
  created() {
    import("tailwindcss/defaultConfig").then(config => {
      this.mediaQueries = config.theme.screens;
    });
  }
};
</script>