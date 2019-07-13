<template>
  <v-layout column class="justify-center">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title class="pb-0 mt-4">
          <h4 class="headline">{{tour.title}}</h4>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 v-for="tour in tour.imgs" :key="tour.id">
      <v-card tile flat class="py-2 px-2">
        <v-img
        :src = tour>
        </v-img>
      </v-card>
    </v-flex>
    <v-flex xs6>
      <v-btn color="info" v-on:click="() => {this.$router.go(-1)}">
        züruck
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'TourDetails',
  computed: {
    id() {
      return this.$route.params.id;
    },
    tour() {
      return this.$store.state.tours[this.id];
    },
  },
  watch: {
    id() {
      this.loadContent();
    },
  },
  methods: {
    loadContent() {
      this.$store.dispatch('loadTour', this.id);
    },
  },

  beforeMount() {
    this.loadContent();
  },
};
</script>

<style scoped>
.rounded{
  border-radius:15px;
}
</style>
