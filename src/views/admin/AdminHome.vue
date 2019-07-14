<template>
  <v-layout>
    <v-flex>
      <v-list v-if="loaded" class="pa-0">
        <v-list-tile v-for="tour in tours" :key="tour.id" avatar :to="{ name: 'adminTour', params: { id: tour.id } }">
          <v-list-tile-avatar>
            <img :src="tour.cover">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ tour.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ tour.excerpt }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AdminHome',
  computed: {
    ...mapState([
      'tours',
    ]),
    loaded() {
      return Object.keys(this.tours).length > 0;
    },
  },
  methods: {
    loadContent() {
      this.$store.dispatch('loadTour', this.id);
    },
    showTours(days) {
      this.dialog = true;
      this.selectedDate = days.date;
    },
  },
  beforeMount() {
    this.$store.dispatch('loadTours');
  },
};
</script>
