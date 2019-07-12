<template>
  <v-layout class="justify-center">
    <v-flex xs10 sm6>
      <v-card v-if="tour" class="mt-4">
        <!-- Card Titel -->
        <v-card-title>
          <h2>{{ tour.title }}</h2>
        </v-card-title>
        <!-- Card Image -->
        <v-img :src="tour.cover" class="rounded" />
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
        <v-card-title v-if="tour.imgs && tour.imgs.length > 0" class="justify-start mb-0 ml-4">
          Impressionen:
        </v-card-title>
        <v-layout class="justify-center mb-2 mt-0">
          <v-avatar v-for="img in tour.imgs" :key="img" class="ml-3">
            <v-img :src="img" />
          </v-avatar>
        </v-layout>
        <!-- Gallery Button -->
        <v-card-actions v-if="tour.imgs && tour.imgs.length > 0" class="justify-center mb-5">
          <v-btn :to="{ name: 'tour', params: { id: tour.id } }">Zur Galerie</v-btn>
        </v-card-actions>
        <!-- Card Callendar -->
        <v-card-actions class="justify-center">
          <vc-calendar title-position="left" :attributes="events" />
        </v-card-actions>

        <router-link :to="{ name: 'tour', params: { id: 'QBUxNLEwIYH9od2o0C5m' }}">trave</router-link>
      </v-card>
      <v-progress-circular v-else :width="5" color="primary" indeterminate />
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
    events() {
      if (!this.tour.events) {
        return [];
      }

      return this.tour.events.map(i => ({
        highlight: i.booked ? 'red' : 'blue',
        dates: new Date(this.convertDate(i.start)),
        popover: {
          label: i.title,
          visibility: 'click',
        },
      }));
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
    convertDate(date) {
      const parts = date.split('.');
      return ` ${parts[1]}.${parts[0]}.${parts[2]} `;
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
