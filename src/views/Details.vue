<template>
<div></div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.title,
    };
  },
  computed: {
    tour() {
      const result = this.$store.getters.tourByName(this.title);
      return result[0];
    },
  },
};
</script>

<style scoped>
</style>
