<template>
  <v-layout justify-center>
    <v-flex xs10 sm6 offset-sm3>
      <v-card class="elevation-0 mt-4">
        
        <!-- Card Titel -->
        <v-card-title>
          <h2>{{tour.title}}</h2>
        </v-card-title>
        
        <!-- Card Image -->
        <v-img
        v-bind:src="tour.mainImg"
        class="rounded"
        ></v-img>
        
        <!-- Card Subtitel -->
        <v-card-title class="justify-center pa-0 pt-2">
        <h4>{{tour.subtitle}}</h4>
        </v-card-title>
        
        <!-- Card Date -->
        <v-card-title class="justify-center pa-0 pt-0">
        <h5>{{tour.startDate}} - {{tour.endDate}}</h5>
        
        <!-- Card Text -->
        </v-card-title>
        <v-card-text> {{ tour.text}}</v-card-text>
        
        <!-- Card Thumbnails for Gallery -->
        <v-layout class="justify-center mb-2">
          <v-avatar 
          v-for="index in 4" 
          :key="index"
          class="ml-3"
          >
            <v-img
            v-bind:src="tour.img[index]"></v-img>
          </v-avatar>
        </v-layout>
        
        <!-- Gallery Button -->
        <v-card-actions v-if="tour.img.length > 0" class="justify-center">
          <v-btn>
            Zur Galerie
          </v-btn>
        </v-card-actions>
      
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.title,
    };
  },
  computed: {
    tour() {
      const result = this.$store.getters.tourByName(this.title);
      return result[0];
    },
  },
};
</script>

<style scoped>
.rounded{
  border-radius:15px;
}
</style>
