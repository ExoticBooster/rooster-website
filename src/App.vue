<template>
<v-app>
  <v-toolbar
      app
      color="blue darken-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques">
    <v-avatar @click=home>
      <img src="@/assets/RoosterLogo.png">
    </v-avatar>
    <v-toolbar-title>Rooster on the Sea</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon>
    </v-toolbar-side-icon>
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>
