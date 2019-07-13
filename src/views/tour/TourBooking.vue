<template>
  <v-form @submit.prevent="onSubmit" ref="form" v-model="valid" :lazy-validation="true">
    <v-layout row wrap justify-center fill-height>
      <v-flex xs12 sm10 lg6>
        <v-card class="elevation-9 pb-3" :class="{ 'mt-0': $vuetify.breakpoint.smAndDown, 'mt-5': $vuetify.breakpoint.mdAndUp }">
          <v-card-text class="text-xs-center">
            <h2>Buchungsanfrage</h2>
          </v-card-text>
          <v-divider />
          <v-card-text class="text-xs-center">
            <h3>Travemünder Woche</h3>
          </v-card-text>
          <v-card-text class="text-xs-center">
            <h3>Abendtörn</h3>
            <span>19.07.2018</span>
            <br>
            <span>Start 18:00</span>
            <br>
            <span>End 22:00</span>
          </v-card-text>
          <v-divider class="mb-3"/>
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <v-text-field
                v-model="name"
                box
                label="Voller Name"
                type="text"
                prepend-inner-icon="person"
                :rules="nameRules"
                required
                />
              <v-text-field
                v-model="email"
                box
                label="Email Adresse"
                type="email"
                prepend-inner-icon="email"
                :rules="emailRules"
                required />
              <v-text-field
                v-model="phone"
                box
                label="Telephonnumer (optional)"
                type="phone"
                prepend-inner-icon="phone"
                :rules="phoneRules"
                required />
              <v-select
                box
                :items="items"
                label="Anzahl der Personen"
                :value="1" />
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs10 offset-xs1>
              <v-textarea
                box
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
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    items() {
      return [
        { text: '1 Person', value: 1 },
        { text: '2 Personen', value: 2 },
        { text: '3 Personen', value: 3 },
        { text: '4 Personen', value: 4 },
        { text: '5 Personen', value: 5 },
        { text: '6 Personen', value: 6 },
      ];
    },
  },
  methods: {
    book() {
      // TODO
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
      }
    },
  },
};
</script>