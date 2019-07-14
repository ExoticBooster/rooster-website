<template>
  <v-navigation-drawer v-model="open" temporary right app style="display:flex; flex-direction:column;">
    <v-icon x-large class="ml-auto mt-3 mr-3" style="width: 24px" @click="$emit('toggleMenu')">close</v-icon>
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
            <router-link :to="{ name: 'imprint' }" class="toolbar-title">Impressum</router-link>
          </h3>
        </v-list-tile-title>

        <v-list-tile-title>
          <h3>
            <router-link :to="{ name: 'dataprotection' }" class="toolbar-title">Datenschutz</router-link>
          </h3>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      navItems: [
        { title: 'Home', to: 'home' },
        { title: 'About Me', to: 'about' },
      ],
    };
  },
};
</script>

<style scoped>
.v-list__tile__title {
  text-align: right !important;
}
</style>
