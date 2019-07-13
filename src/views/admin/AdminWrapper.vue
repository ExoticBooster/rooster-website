<template>
  <div>
    <v-btn @click="logout">logout</v-btn>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AdminWrapper',
  data() {
    return {
      dialog: false,
      selectedDate: null,
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
