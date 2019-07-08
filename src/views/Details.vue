<template>
  <v-layout class="justify-center">
    <v-flex xs10 sm6>
      <v-card class="mt-4">
        <!-- Card Titel -->
        <v-card-title>
          <h2>{{tour.title}}</h2>
        </v-card-title>
        <!-- Card Image -->
        <v-img
        v-bind:src="tour.mainImg"
        class="rounded"
        ></v-img>
        <!-- Card Subtitel -->
        <v-card-title class="justify-center pa-0 pt-2">
        <h4>{{tour.subtitle}}</h4>
        </v-card-title>
        <!-- Card Date -->
        <v-card-title class="justify-center pa-0 pt-0">
        <h5>{{tour.startDate}} - {{tour.endDate}}</h5>
        <!-- Card Text -->
        </v-card-title>
        <v-card-text> {{ tour.text}}</v-card-text>
        <!-- Card Thumbnails for Gallery
            #TODO:
            - Dont load the pictures in full resulution just for Thumbnails!
         -->
        <v-layout class="justify-center mb-2 mt-4">
          <v-avatar
          v-for="index in 4"
          :key="index"
          class="ml-3"
          >
            <v-img
            v-bind:src="tour.img[index]"></v-img>
          </v-avatar>
        </v-layout>
        <!-- Gallery Button -->
        <v-card-actions v-if="tour.img.length > 0" class="justify-center mb-5">
          <v-btn>
            Zur Galerie
          </v-btn>
        </v-card-actions>
        <!-- Card Callendar -->
        <Calendar>
        </Calendar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { setupCalendar, Calendar } from 'v-calendar';

setupCalendar({
  componentPrefix: 'vc',
});

export default {
  components: {
    Calendar,
  },
  data() {
    return {
      eventCategories: [
        {
          id: 1,
          title: 'Verfügbar',
          textColor: 'white',
          backgroundColor: 'green',
        },
        {
          id: 2,
          title: 'Ausgebucht',
          textColor: 'white',
          backgroundColor: 'red',
        },
      ],
      events: [
        {
          title: 'Mittags',
          start: '2019-07-06',
          startTime: '12:00',
          end: '2019-07-07',
          endTime: '14:00',
          categoryId: 1,
        },
        {
          title: 'Abendregatta',
          start: '2019-07-08',
          startTime: '16:00',
          end: '2019-07-08',
          endTime: '20:00',
          categoryId: 1,
        },
        {
          title: 'Abendregatta',
          start: '2019-07-09',
          startTime: '16:00',
          end: '2019-07-09',
          endTime: '20:00',
          categoryId: 1,
        },
      ],
      title: this.$route.params.title,
    };
  },
  methods: {
    convertDate(date) {
      const parts = date.split('.');
      const newDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      return newDate;
    },
  },
  computed: {
    tour() {
      const result = this.$store.getters.tourByName(this.title);
      return result[0];
    },
  },
};
</script>

<style scoped>
.rounded{
  border-radius:15px;
}
</style>
