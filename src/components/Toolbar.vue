<template>
  <v-toolbar app class="blue-grey white--text" scroll-off-screen scroll-target="#scrolling-techniques">
    <router-link class="white--text" :to="{ name: 'home' }">
      <v-avatar>
        <img src="@/assets/RoosterLogo.png">
      </v-avatar>
    </router-link>
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }" class="toolbar-title">Rooster on the Sea</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="hidden-sm-and-down white--text" flat>Info</v-btn>
      <v-btn class="hidden-sm-and-down white--text" flat>Törns</v-btn>
      <v-btn class="hidden-sm-and-down white--text" flat>Gallerie</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="$emit('toggleMenu')" />
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
