<script>
export default {
  render() {
    return this.$scopedSlots.default({
      docs: this.$site.pages
    });
  }
};
</script>