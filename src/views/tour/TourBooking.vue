<template>
  <v-form @submit.prevent="book" ref="form" v-model="valid" :lazy-validation="true">
    <v-layout row wrap justify-center fill-height>
      <v-flex xs12 sm10 lg6>
        <v-card v-if="event" class="elevation-9 pb-3" :class="{ 'mt-0': $vuetify.breakpoint.smAndDown, 'mt-5': $vuetify.breakpoint.mdAndUp }">
          <v-card-text class="text-xs-center">
            <h2>Buchungsanfrage</h2>
          </v-card-text>
          <v-divider />
          <v-card-text class="text-xs-center">
            <h3>{{ tour.title }}</h3>
          </v-card-text>
          <v-card-text class="text-xs-center pt-0">
            <h3>{{ event.title }}</h3>
            <span>Start: {{ event.start | date('normal') }} um {{ event.startTime }} Uhr</span>
            <br />
            <span>Ende: {{ event.end | date('normal') }} um {{ event.endTime }} Uhr</span>
          </v-card-text>
          <v-divider class="mb-3"/>
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field
                v-model="name"
                box
                label="Voller Name"
                type="text"
                name="name"
                autocomplete="name"
                prepend-inner-icon="person"
                :rules="nameRules" />
              <v-text-field
                v-model="email"
                box
                label="Email Adresse"
                type="email"
                name="email"
                autocomplete="email"
                prepend-inner-icon="email"
                :rules="emailRules" />
              <v-text-field
                v-model="phone"
                box
                label="Telephonnumer (optional)"
                type="tel"
                name="phone"
                autocomplete="tel"
                prepend-inner-icon="phone"
                :rules="phoneRules" />
              <v-select
                v-model="persons"
                box
                :rules="personsRules"
                :items="items"
                label="Anzahl der Personen" />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs10 offset-xs1>
              <v-textarea
                v-model="message"
                box
                autocomplete="none"
                label="Eigene Nachricht (optional)" />
            </v-flex>
          </v-layout>
          <v-layout row justify-center>
            <v-btn type="submit" color="success" >
              abschicken
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Dankeschön</v-card-title>
        <v-card-text>
          <span>Ihre Anfrage wurde abgeschickt!</span> <br>
          <span>Wir werden uns schnellstmöglich bei Ihnen melden.</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat :to="{ name: 'home' }">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import { convertDate, log } from '@/utils';

export default {
  name: 'TourBooking',
  data() {
    return {
      dialog: false,
      valid: true,
      value: false,
      name: '',
      nameRules: [
        v => !!v || 'Bitte geben Sie Ihren vollen Namen an.',
        v => (v && v.length > 5) || 'Ihr voller Name ist bestimmt länger als 5 Zeichen...',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Bitte geben Sie Ihre E-mail an.',
        v => /.+@.+/.test(v) || 'Bitte geben Sie eine valide E-mail an.',
      ],
      phone: '',
      phoneRules: [
        // v => /\d+/.test(v) || 'Die Telefonnummer darf nur Nummern enthalten',
      ],
      persons: null,
      personsRules: [
        v => !!v || 'Bitte wählen Sie die Anzahl an Personen aus.',
      ],
      message: '',
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    tour() {
      return this.$store.state.tours[this.id];
    },
    eventId() {
      return this.$route.params.event;
    },
    event() {
      return (this.tour && this.tour.events) ? this.tour.events[this.eventId] || null : null;
    },
    items() {
      return [
        { text: 'Bitte wählen', value: null },
        { text: '1 Person', value: 1 },
        { text: '2 Personen', value: 2 },
        { text: '3 Personen', value: 3 },
        { text: '4 Personen', value: 4 },
        { text: '5 Personen', value: 5 },
        { text: '6 Personen', value: 6 },
      ];
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
    async book() {
      if (!this.$refs.form.validate()) {
        return;
      }

      const booking = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        persons: this.persons,
        message: this.message,
        event: this.eventId,
        tour: this.id,
      };

      const res = await this.$store.dispatch('bookTour', booking);
      if (res) {
        this.dialog = true;
      } else {
        log('Die Buchung ist leider fehlgeschalgen!');
        // TODO: error -> show alert
      }
    },
    loadContent() {
      this.$store.dispatch('loadTour', this.id);
    },
  },
  beforeMount() {
    this.loadContent();
  },
};
</script>
