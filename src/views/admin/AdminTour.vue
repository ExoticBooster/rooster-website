<template>
  <v-layout v-if="tour">
    <v-flex xs10 offset-xs1 class="py-3">
      <v-flex>
        <h3 class="headline mb-3">Tour - {{ tour.title }}</h3>
      </v-flex>

      <v-divider class="my-3"/>

      <v-tabs v-model="activeTab" color="indigo" dark slider-color="yellow">
        <v-tab v-for="tab in tabs" :key="tab" ripple>{{ tab }}</v-tab>
        <v-tab-item :key="1">
          <AdminTourDetails :tour="tour"/>
        </v-tab-item>
        <v-tab-item :key="2">
          <AdminTourEvents :tour="tour"/>
        </v-tab-item>
        <v-tab-item :key="3">
          <AdminTourImages :tour="tour"/>
        </v-tab-item>
      </v-tabs>

    </v-flex>
  </v-layout>
</template>

<script>
import AdminTourDetails from '@/components/AdminTourDetails.vue';
import AdminTourEvents from '@/components/AdminTourEvents.vue';
import AdminTourImages from '@/components/AdminTourImages.vue';

export default {
  name: 'AdminTour',
  components: {
    AdminTourDetails,
    AdminTourEvents,
    AdminTourImages,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        'Details',
        'Events',
        'Bilder',
      ],
    };
  },
  computed: {
    tourId() {
      return this.$route.params.id;
    },
    tour() {
      return this.$store.state.tours[this.tourId];
    },
  },
  watch: {
    tourId() {
      this.loadTour();
    },
  },
  methods: {
    loadTour() {
      this.$store.dispatch('loadTour', this.tourId);
    },
  },
  beforeMount() {
    this.loadTour();
  },
};
</script>
