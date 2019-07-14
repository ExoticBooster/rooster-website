<template>
  <v-layout>
    <v-flex>
      <v-list v-if="loaded">
        <v-flex v-for="booking in bookings" :key="booking.id">
          <v-list-tile @click="openBooking(booking.id)" avatar>
            <v-list-tile-avatar>
              <v-icon large color="grey">account_circle</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ booking.name }} ({{ booking.persons }} Personen)</v-list-tile-title>
              <v-list-tile-sub-title>{{ tour(booking).title }} - {{ event(booking).title }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider :inset="true"></v-divider>
        </v-flex>
      </v-list>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AdminBookings',
  computed: {
    ...mapState([
      'bookings',
      'tours',
    ]),
    loaded() {
      return Object.keys(this.bookings).length > 0 && Object.keys(this.tours).length > 0;
    },
  },
  methods: {
    openBooking(bookingId) {
      this.$router.push({ name: 'adminBooking', params: { booking: bookingId } });
    },
    tour(booking) {
      return this.loaded ? this.tours[booking.tour] : null;
    },
    event(booking) {
      return this.loaded ? this.tour(booking).events[booking.event] : null;
    },
  },
  beforeMount() {
    this.$store.dispatch('loadTours');
    this.$store.dispatch('loadBookings');
  },
};
</script>
