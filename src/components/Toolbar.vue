<template>
  <v-toolbar
  app
  class="blue-grey white--text"
  scroll-off-screen
  scroll-target="#scrolling-techniques"
  height="100%"
  >
    <router-link class="white--text" :to="{ name: 'home' }">
      <v-avatar
      size="68">
        <img src="@/assets/RoosterLogo.png">
      </v-avatar>
    </router-link>
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }" class="toolbar-title">Rooster on the Sea</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn  v-for="item in navItems" :key="item.id" class="hidden-sm-and-down white--text itemText" flat :to="{ name: item.to}">{{item.title}}</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="$emit('toggleMenu')" />
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Toolbar',

  computed: {
    ...mapState([
      'navItems',
    ]),
  },
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
  font-family: 'Karla', sans-serif;
  font-size: 30px;
}

.itemText{
  color: inherit;
  text-decoration: inherit;
  font-family: 'Karla', sans-serif;
  font-size: 21px;
}
</style>
