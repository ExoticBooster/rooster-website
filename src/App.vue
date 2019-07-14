<template>
  <v-app>
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
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="pa-3 mt-auto">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
    <v-navigation-drawer
      style="display:flex;flex-direction:column;"
      v-model="drawer"
      temporary
      right
      app>
      <v-icon x-large class="ml-auto mt-3 mr-3" style="width: 24px" @click="()=> {drawer = !drawer}">close</v-icon>
      <v-list class="pt-0" three-line>
        <div v-for="item in navItems" :key="item.id">
          <v-list-tile>
            <v-list-tile-title class="headline pr-1">
              <router-link style="color: black;" :to="{ name: item.to }">{{ item.title }}</router-link>
              </v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
        </div>
      </v-list>
      <v-spacer></v-spacer>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>
            <h3>
              <router-link
                :to="{ name: 'imprint' }"
                class="toolbar-title"
              >Impressum</router-link>
            </h3>
            </v-list-tile-title>

             <v-list-tile-title>
            <h3>
              <router-link
                :to="{ name: 'dataprotection' }"
                class="toolbar-title"
              >Datenschutz</router-link>
            </h3>
            </v-list-tile-title>
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
      navItems: [
        { title: 'Home', to: 'home' },
        { title: 'About Me', to: 'about' },
      ],
    };
  },
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}

.v-list__tile__title {
  text-align: right !important;
}
</style>
