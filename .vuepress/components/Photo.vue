<template>
  <picture>
    <source v-for="screen in this.screens" :srcset="sourcename(screen)" :media="media(screen)" />
    <img :src="filename" :alt="alt" />
  </picture>
</template>

<script>
export default {
  name: "photo",
  data() {
    return {
      screens: {
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
    breakpoint: {
      type: String,
      default: "min-width"
    }
  },
  computed: {
    filename() {
      return this.name.concat(".").concat(this.ext);
    }
  },
  methods: {
    media(screen) {
      return "("
        .concat(this.breakpoint)
        .concat(": ")
        .concat(screen)
        .concat(")");
    },
    sourcename(screen) {
      return [this.name, screen]
        .join("_")
        .concat(".")
        .concat(this.ext);
    }
  },
  created() {
    import("tailwindcss/resolveConfig").then(module => {
      const fullConfig = module.default("../../tailwind.config.js");
      this.screens = Object.values(fullConfig.theme.screens);
    });
  }
};
</script>