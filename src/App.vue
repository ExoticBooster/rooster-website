<template>
  <v-app>
    <Toolbar @toggleMenu="drawer = !drawer" />
    <Menu :open="drawer" @toggleMenu="drawer = !drawer" />
    <v-content class="px-0 mx-0">
      <v-container class="px-0 mt-0 pt-0 mx-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';
import Toolbar from '@/components/Toolbar.vue';

export default {
  components: {
    Toolbar,
    Footer,
    Menu,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
