<template>
  <v-layout justify-center>
    <v-flex xs10 sm6 offset-sm3>
      <v-card class="elevation-0 mt-4">
        <v-card-title>
          <h2>{{tour.title}}</h2>
        </v-card-title>
        <v-img
        v-bind:src="tour.mainImg"
        class="rounded"
        ></v-img>
        <v-card-title class="justify-center">
        <h4>{{tour.subtitle}}</h4>
        <h5>{{tour.startDate}} - {{tour.endDate}}</h5>
        </v-card-title>
        <v-card-text> {{ tour.text}}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
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
.rounded{
  border-radius:15px;
}
</style>
