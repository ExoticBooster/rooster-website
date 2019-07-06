<template>
<v-app>
  <v-toolbar
      app
      color="teal lighten-3"
      dark
      scroll-off-screen
      scroll-target="#scrolling-techniques">
    <v-avatar>
      <img src="@/assets/RoosterLogo.png" alt="">
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

<style>
</style>
