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
      <router-view></router-view>
    </v-content>
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
            <v-list-tile-title class="headline">
              <router-link :to="{ name: item.to }">{{ item.title }}</router-link>
              </v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
        </div>
      </v-list>
      <v-spacer></v-spacer>
      <v-list>
        <v-list-tile>
          <v-list-tile-title><h3>Impressum</h3></v-list-tile-title>
          <v-list-tile-title><h3>Datenschutz</h3></v-list-tile-title>
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

<style>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}

  .router-link {padding: 5px;text-decoration: none;}
  .router-link:visited {color: black;}
  .router-link.router-link-active {color: black; background-color: black; text-decoration: none;}
</style>
