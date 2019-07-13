<template>
  <div>
  <!-- Desktop Ansicht -->
  <v-layout row hidden-sm-and-down>
    <!-- Links sollen alle aktuellen Anrfagen stehen / oder vielleicht auch einfach erst mal alle -->
    <v-flex lg6 >
    LINKS
    </v-flex>
    <v-flex lg6>
    <!-- rechts soll das gleiche Kalendermenü wie im details stehen, womit papa seine touren auswählen kann und auf ausgebucht oder frei setzten kann -->
    RECHTS
    </v-flex>
  </v-layout>
    <!-- Mobil Ansicht -->
  <v-layout row wrap hidden-md-and-up>
    <!-- alle anfragen -->
    <v-flex xs12>
    oben
    </v-flex>
   <!-- Terminplan -->
    <v-flex xs12>
      <!-- Für alle touren die wir grade haben -->
      <v-card >

      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import { convertDate, dateEqual } from '@/utils';

export default {
  name: 'AdminHome',
  data() {
    return {
      dialog: false,
      selectedDate: null,
    };
  },

  computed: {
    events() {
      if (!this.tour.events) {
        return [];
      }

      return Object.keys(this.tour.events).map((key) => {
        const event = this.tour.events[key];
        return {
          highlight: event.booked ? 'red' : 'green',
          dates: { start: convertDate(event.start), end: convertDate(event.end) },
        };
      });
    },

    eventsDate() {
      if (!this.selectedDate) {
        return [];
      }
      return Object.keys(this.tour.events)
        .filter(i => dateEqual(this.tour.events[i].start, this.selectedDate))
        .map(i => this.tour.events[i]);
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

  filters: {
    date: convertDate,
  },
};
</script>
