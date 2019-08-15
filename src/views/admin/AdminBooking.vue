<template>
  <v-layout v-if="booking">
    <v-flex xs10 offset-xs1 class="py-3">
      <v-flex>
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
            <v-btn small :to="{ name: 'adminTour', params: { id: booking.tour } }">Tour öffnen</v-btn>
          </template>
        </div>
      </v-flex>

      <v-divider class="my-3"/>

      <v-list two-line>
        <template v-for="item in messages">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
          <v-flex :key="item.id">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img v-if="item.from === 'me'" src="@/assets/RoosterLogo.png">
                <v-icon v-else large color="grey">account_circle</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-if="item.from === 'me'">Du</v-list-tile-title>
                <v-list-tile-title v-else>{{ booking.name }}</v-list-tile-title>
                <v-list-tile-sub-title v-html="item.text"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider :inset="true"></v-divider>
          </v-flex>
        </template>
      </v-list>

      <v-flex>
        <v-textarea
          v-model="message"
          box
          autocomplete="none"
          label="Antworten" />
      </v-flex>

      <v-layout row justify-center>
        <v-btn @click="sendMessage" color="success" >
          abschicken
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { convertDate, log } from '@/utils';

export default {
  name: 'AdminBooking',
  data() {
    return {
      message: '',
    };
  },
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
    messages() {
      return this.booking ? this.$store.getters.getBookingMessages(this.bookingId) : null;
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
    async sendMessage() {
      if (!this.message) return;

      const res = await this.$store.dispatch('sendMessage', {
        booking: this.bookingId,
        text: this.message,
        from: 'me',
        read: true,
      });

      if (res) {
        this.message = '';
      } else {
        log('Message could not be send.');
      }
    },
  },
  beforeMount() {
    this.loadBooking();
  },
};
</script>
