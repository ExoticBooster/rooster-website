<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 lg6>
      <v-card v-if="tour" class="pb-3" :class="{ 'mt-0': $vuetify.breakpoint.smAndDown, 'mt-5': $vuetify.breakpoint.mdAndUp }">
        <!-- Card Titel -->
        <v-card-title>
          <h2>{{ tour.title }}</h2>
        </v-card-title>
        <!-- Card Image -->
        <v-img :src="tour.cover" class="mx-3 rounded" />
        <!-- Card Subtitel -->
        <v-card-title v-if="tour.subtitle" class="justify-center pa-0 pt-2">
          <h4>{{ tour.subtitle }}</h4>
        </v-card-title>
        <!-- Card Date -->
        <v-card-title v-if="tour.startDate && tour.endDate" class="justify-center pa-0 pt-0">
          <h5>{{ tour.startDate }} - {{ tour.endDate }}</h5>
          <!-- Card Text -->
        </v-card-title>
        <v-card-text>{{ tour.description }}</v-card-text>
        <!-- Card Thumbnails for Gallery
            #TODO:
            - Dont load the pictures in full resulution just for Thumbnails!
         -->
        <v-flex v-if="tour.imgs && tour.imgs.length > 0" justify-center class="mt-2 mb-4 text-xs-center">
          <h3>Impressionen</h3>
          <v-flex class="my-3">
            <v-avatar v-for="img in tour.imgs" :key="img" class="mx-1">
              <v-img :src="img" />
            </v-avatar>
          </v-flex>
          <v-btn :to="{ name: 'tourGallery', params: { id: tour.id } }">Zur Galerie</v-btn>
        </v-flex>
        <!-- Card Callendar -->
        <v-flex mx-3>
          <vc-calendar title-position="left" is-expanded :attributes="events" @dayclick="showTours"/>
        </v-flex>
      </v-card>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
    </v-flex>

    <v-dialog v-if="tour" v-model="dialog" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Touren - {{ selectedDate | date('normal') }} </v-card-title>
        <template v-if="eventsDate && eventsDate.length > 0">
          <v-list two-line subheader class="">
            <v-list-tile v-for="(event, key) in eventsDate" :key="key" class="pa-0" style="border-bottom: 1px solid #bbb">
              <v-list-tile-content>
                <v-list-tile-title>{{ event.title }}</v-list-tile-title>
                <v-list-tile-sub-title>Start: {{ event.start | date('short') }} {{ event.startTime }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Ende: {{ event.end | date('short') }} {{ event.endTime }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn v-if="event.booked" depressed small color="error">ausgebucht</v-btn>
                <v-btn v-else :to="{ name: 'tourBooking', params: { id, event: key }}" small color="success">Anfragen</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </template>
        <v-card-text v-else>
          <span>Am {{ selectedDate | date('normal') }} bieten wir leider keine Touren an. Wählen Sie gerne einen anderen Tag.</span>
        </v-card-text>
        <v-card-actions class="mt-auto">
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog=false">Schliessen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { convertDate, dateEqual } from '@/utils';

export default {
  name: 'TourDetails',
  data() {
    return {
      dialog: false,
      selectedDate: null,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    tour() {
      return this.$store.state.tours[this.id];
    },
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
  watch: {
    id() {
      this.loadContent();
    },
  },
  filters: {
    date: convertDate,
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
    this.loadContent();
  },
};
</script>

<style scoped>
.rounded{
  border-radius: 5px;
}
</style>
