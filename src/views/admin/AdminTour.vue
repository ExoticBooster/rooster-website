<template>
  <v-layout v-if="tour">
    <v-flex xs10 offset-xs1 class="py-3">
      <v-flex>
        <h3 class="headline mb-3">Tour - {{ tour.title }}</h3>
      </v-flex>

      <v-divider class="my-3"/>

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

      <v-list two-line>
        <template v-for="item in tour.events">
          <v-flex :key="item.id">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon large color="grey">account_circle</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.start | date('normal') }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider :inset="true"></v-divider>
          </v-flex>
        </template>
      </v-list>

      <v-layout row justify-center>
        <v-btn @click="save" color="success" >
          speichern
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { convertDate } from '@/utils';

export default {
  name: 'AdminTour',
  data() {
    return {
      title: '',
      excerpt: '',
      description: '',
      requiredRules: [],
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
  filters: {
    date: convertDate,
  },
  methods: {
    async loadTour() {
      await this.$store.dispatch('loadTour', this.tourId);

      if (this.tour) {
        this.title = this.tour.title;
        this.excerpt = this.tour.excerpt;
        this.description = this.tour.description;
      }
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
    this.loadTour();
  },
};
</script>
