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
    <v-toolbar-side-icon @click.stop="$emit('toggleMenu')" />
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
