<template>
  <v-layout>
    <v-flex>
      <v-list v-if="toursSize > 0">
        <v-list-tile v-for="tour in tours" :key="tour.id" avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="tour.title"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-avatar>
            <img :src="tour.cover">
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'AdminHome',
  computed: {
    ...mapState([
      'tours',
    ]),
    ...mapGetters([
      'toursSize',
    ]),
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
