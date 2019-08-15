<template>
  <v-flex>
    <v-tabs v-model="tab" color="grey lighten-3" slider-color="indigo">
      <v-tab :to="{ name: 'admin' }">Touren</v-tab>
      <v-tab :to="{ name: 'adminBookings' }">Buchungen</v-tab>
      <v-tab :to="{ name: 'adminTexts' }">Texte anpassen</v-tab>
      <v-spacer></v-spacer>
      <v-tab @click="logout">Logout</v-tab>
    </v-tabs>
    <v-card min-height="100">
      <router-view></router-view>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AdminWrapper',
  data() {
    return {
      tab: this.$route.path,
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  watch: {
    user(user) {
      // Send un-authenticated users back to login
      if (!user) {
        this.$router.push({ name: 'login' });
      }
    },
  },
  methods: {
    ...mapActions([
      'logout',
    ]),
  },
};
</script>
