<template>
  <v-layout>
    <v-flex>
      <v-card v-if="booking">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-3">Buchung<template v-if="tour && event">: {{ tour.title }} - {{ event.title }}</template></h3>
            <div>
              <span>Name: {{ booking.name }}</span><br />
              <span>Email: <a :href="`mailto:${booking.email}`">{{ booking.email }}</a></span><br />
              <span v-if="booking.phone">Telefon: {{ booking.phone }}</span><br />
              <span>Personen: {{ booking.persons }}</span><br />
              <template v-if="tour && event">
                <span>Tour: {{ tour.title }} - {{ event.title }}</span><br />
                <span>Beginn: {{ event.start | date('normal') }} um {{ event.startTime }} Uhr</span><br />
                <span>Ende: {{ event.end | date('normal') }} um {{ event.endTime }} Uhr</span><br />
              </template>
              <v-divider class="my-3" />
              <pre v-if="booking.message">{{ booking.message }}</pre>
            </div>
          </div>
        </v-card-title>
      </v-card>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
    </v-flex>
  </v-layout>
</template>

<script>
import { convertDate } from '@/utils';

export default {
  name: 'AdminBooking',
  computed: {
    bookingId() {
      return this.$route.params.booking;
    },
    booking() {
      return this.$store.state.bookings[this.bookingId];
    },
    tour() {
      return this.booking ? this.$store.state.tours[this.booking.tour] : null;
    },
    event() {
      return this.booking ? this.tour.events[this.booking.event] : null;
    },
  },
  watch: {
    bookingId() {
      this.loadBooking();
    },
  },
  filters: {
    date: convertDate,
  },
  methods: {
    loadBooking() {
      this.$store.dispatch('loadBooking', this.bookingId);
    },
    loadTour() {
      if (!this.booking) return;
      this.$store.dispatch('loadTour', this.booking.tour);
    },
  },
  beforeMount() {
    this.loadBooking();
  },
};
</script>
