<template>
  <div>
    <p>Admin</p>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AdminHome',
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
