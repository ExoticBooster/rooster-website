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
      <v-toolbar-side-icon
      @click.stop ="drawer = !drawer"
      >
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-navigation-drawer
    style="display:flex;flex-direction:column;"
    v-model="drawer"
    temporary
    app
    >
      <v-list class="pt-0"  three-line>
          <v-list-tile>
            <v-list-tile-title class="headline"> Home </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title class="headline"> About Me </v-list-tile-title>
          </v-list-tile>
      </v-list>
          <v-spacer></v-spacer>
      <v-list>
          <v-list-tile>
            <v-list-tile-title > <h3>Impressum</h3> </v-list-tile-title>
            <v-list-tile-title > <h3>Datenschutz</h3> </v-list-tile-title>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>
