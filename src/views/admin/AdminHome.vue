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
    <v-flex xs12 v-if="tours">
      <!-- Für alle touren die wir grade haben -->
      <v-card >
        <v-flex mx-3 v-for="tour in tours" :key="tour.tourID">
          <h3 headline>{{tour.title}}</h3>
          <vc-calendar title-position="left" is-expanded :attributes="eventsFromTour(tour)" @dayclick="showTours"/>

          <v-dialog v-if="tour" v-model="dialog" persistent>
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Touren - {{ selectedDate | date('normal') }} </v-card-title>
              <template v-if="eventsDate(tour) && eventsDate(tour).length > 0">
                <v-list two-line subheader class="">
                  <v-list-tile v-for="(event, key) in eventsDate(tour)" :key="key" class="pa-0" style="border-bottom: 1px solid #bbb">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ event.title }}</v-list-tile-title>
                      <v-list-tile-sub-title>Start: {{ event.start | date('short') }} {{ event.startTime }}</v-list-tile-sub-title>
                      <v-list-tile-sub-title>Ende: {{ event.end | date('short') }} {{ event.endTime }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-flex x12 v-if="edit">
                      <v-btn depressed small color="error" class="ml-5" @click="setEvent({id: tour.id, event: event.key, value: true})">voll</v-btn>
                      <v-btn  small color="success" class="ml-5" @click="setEvent({id: tour.id, event: event.key, value: true})">frei</v-btn>
                      <v-icon @click="edit = !edit"  class="pr-0 mr-0 ml-1"> close </v-icon>
                    </v-flex>
                    <v-flex xs12 v-else>
                      <v-btn class="ml-5" v-if="event.booked" depressed small color="error">ausgebucht</v-btn>
                      <v-btn class="ml-5" v-else :to="{ name: 'tourBooking', params: { id, event: key }}" small color="success">Anfragen</v-btn>
                      <v-icon @click="edit = !edit" class="pr-0 mr-0 pl-4"> edit </v-icon>
                    </v-flex>
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
        </v-flex>
      </v-card>
    </v-flex>
    <v-progress-circular v-else :width="5" color="primary" indeterminate />
  </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { convertDate, dateEqual } from '@/utils';

export default {
  name: 'AdminHome',
  data() {
    return {
      edit: false,
      dialog: false,
      selectedDate: null,
      tourID: null,
    };
  },

  computed: {
    ...mapState([
      'tours',
    ]),
  },

  methods: {
    setEvent(data) {
      this.$store.dispatch('setEvent', data);
    },

    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push({ name: 'login' });
    },

    showTours(days) {
      this.dialog = true;
      this.selectedDate = days.date;
    },

    eventsFromTour(tour) {
      if (!tour.events) {
        return [];
      }

      return Object.keys(tour.events).map((key) => {
        const event = tour.events[key];
        return {
          highlight: event.booked ? 'red' : 'green',
          dates: { start: convertDate(event.start), end: convertDate(event.end) },
        };
      });
    },

    eventsDate(tour) {
      if (!this.selectedDate) {
        return [];
      }

      return Object.keys(tour.events)
        .filter(i => dateEqual(tour.events[i].start, this.selectedDate))
        .map(i => tour.events[i]);
    },
  },

  filters: {
    date: convertDate,
  },

  beforeMount() {
    this.$store.dispatch('loadTours');
  },
};
</script>
