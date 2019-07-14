<template>
  <v-flex class="pa-3">
    <v-flex>
      <v-text-field
        v-model="title"
        box
        label="Titel der Tour"
        prepend-inner-icon="person"
        :rules="requiredRules" />

      <v-text-field
        v-model="excerpt"
        box
        label="Teaser"
        type="text"
        prepend-inner-icon="person" />

      <v-textarea
        v-model="description"
        box
        rows="20"
        autocomplete="none"
        label="Beschreibung" />
    </v-flex>

    <v-layout row justify-center>
      <v-btn @click="save" color="success" >
        speichern
      </v-btn>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: 'AdminTourDetails',
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: '',
      excerpt: '',
      description: '',
      requiredRules: [],
    };
  },
  watch: {
    tour(tour) {
      this.updateTour(tour);
    },
  },
  methods: {
    updateTour(tour) {
      if (!tour) return;
      this.title = tour.title;
      this.excerpt = tour.excerpt;
      this.description = tour.description;
    },
    async save() {
      const updates = {
        title: this.title,
        excerpt: this.excerpt,
        description: this.description,
      };

      const res = await this.$store.dispatch('updateTour', { id: this.tourId, updates });

      if (res) {
        this.$store.commit('snack', 'Tour gespeichert.');
      } else {
        this.$store.commit('snack', 'Beim Speichern ist leider ein Fehler auf getreten!');
      }
    },
  },
  beforeMount() {
    this.updateTour(this.tour);
  },
};
</script>
