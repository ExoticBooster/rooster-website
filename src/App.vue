<template>
  <v-app>
    <v-toolbar app color="blue darken-3" dark scroll-off-screen scroll-target="#scrolling-techniques">
      <router-link :to="{ name: 'home' }">
        <v-avatar>
          <img src="@/assets/RoosterLogo.png">
        </v-avatar>
      </router-link>
      <v-toolbar-title>
        <router-link :to="{ name: 'home' }" class="toolbar-title">Rooster on the Sea</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
