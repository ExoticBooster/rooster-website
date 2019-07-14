<template>
  <v-toolbar app color="grey lighten-2" scroll-off-screen scroll-target="#scrolling-techniques">
    <router-link :to="{ name: 'home' }">
      <v-avatar>
        <img src="@/assets/RoosterLogo.png">
      </v-avatar>
    </router-link>
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }" class="toolbar-title">Rooster on the Sea</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout class="hidden-sm-and-down">
      <v-toolbar-items>
        <router-link class="toolbar-item"> hallo</router-link>
      </v-toolbar-items>
    </v-layout>
    <v-layout class="hidden-md-and-up">
      <v-toolbar-side-icon @click.stop="$emit('toggleMenu')" />
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
