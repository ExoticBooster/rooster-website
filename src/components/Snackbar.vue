<template>
  <v-snackbar
    v-model="snackbar"
    :top="true"
    :timeout="3500">{{ text }}<v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Snackbar',
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    ...mapState({
      text: 'snackbar',
    }),
  },
  watch: {
    text(text) {
      this.snackbar = !!text;
    },
    snackbar(snackbar) {
      if (!snackbar) {
        this.$store.commit('snack', null);
      }
    },
  },
};
</script>
