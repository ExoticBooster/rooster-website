<template>
  <v-flex>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="event in tour.events" :key="event.id">
        <template v-slot:header>
          <div>{{ event.title }}</div>
        </template>
        <v-card>
          <v-flex>
            <v-text-field
              v-model="event.title"
              box
              label="Titel der Tour"
              prepend-inner-icon="person"
              :rules="requiredRules" />

            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              lazy
              full-width
              width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="Picker in dialog"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>

            {{ event.start | date('normal') }}
          </v-flex>

          <v-layout row justify-center>
            <v-btn @click="save" color="success" >
              speichern
            </v-btn>
          </v-layout>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
import { convertDate } from '@/utils';

export default {
  name: 'AdminTourEvents',
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      requiredRules: [
        // v => !!v || 'Diese Feld darf nicht leer bleiben'
      ],
      modal: false,
    };
  },
  filters: {
    date: convertDate,
  },
  methods: {
    async save(id) {
      const updates = {};
      updates.events[id] = {

      };

      const res = await this.$store.dispatch('updateTour', { id: this.tourId, updates });

      if (res) {
        this.$store.commit('snack', 'Event gespeichert.');
      } else {
        this.$store.commit('snack', 'Beim Speichern ist leider ein Fehler auf getreten!');
      }
    },
  },
};
</script>
