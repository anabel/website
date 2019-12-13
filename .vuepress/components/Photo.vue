<template>
  <picture>
    <source
      v-for="breakpoint in this.breakpoints"
      :srcset="sourcename(breakpoint)"
      :media="media(breakpoint)"
    />
    <img :src="filename" :alt="alt" />
  </picture>
</template>

<script>
const mediaCondition = "max-width";

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
    ext: {
      type: String,
      default: "jpg"
    },
    customBreakpoints: {
      type: Array
    }
  },
  computed: {
    filename() {
      return this.name.concat(".").concat(this.ext);
    },
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
    sourcename(breakpoint) {
      return [this.name, breakpoint]
        .join("_")
        .concat(".")
        .concat(this.ext);
    }
  },
  created() {
    import("tailwindcss/defaultConfig").then(config => {
      this.mediaQueries = config.theme.screens;
    });
  }
};
</script>