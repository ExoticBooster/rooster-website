<template>
  <v-layout class="justify-center">
    <v-flex xs10 sm6>
      <v-card class="mt-4">
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
        <!-- Card Thumbnails for Gallery
            #TODO:
            - Dont load the pictures in full resulution just for Thumbnails!
         -->
        <v-card-title v-if="tour.img.length > 0" class="justify-start mb-0 ml-4">
          Impressionen:
        </v-card-title>
        <v-layout class="justify-center mb-2 mt-0">
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
        <v-card-actions v-if="tour.img.length > 0" class="justify-center mb-5">
          <v-btn>
            Zur Galerie
          </v-btn>
        </v-card-actions>
        <!-- Card Callendar -->
        <v-card-actions class="justify-center">
          <vc-calendar title-position="left" :attributes='attrs'>
          </vc-calendar>
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
  methods: {
    convertDate(date) {
      const parts = date.split('.');
      const newDate = `${parts[1]}-${parts[0]}-${parts[2]}`;
      return newDate;
    },
  },
  computed: {
    tour() {
      const result = this.$store.getters.tourByName(this.title);
      return result[0];
    },
    
    attrs(){
      let liste = []
      for( var item in this.tour.angebote){
        var current = this.tour.angebote[item]
        liste.push(
          {
            highlight: current.gebucht ? 'red' : 'blue' ,
            dates: new Date(this.convertDate(current.startDate)),
            popover:{
              label:current.title,
              visibility: 'click'
            }
          }
        )
      }
      return liste;
    }
  }
};

</script>

<style scoped>
.rounded{
  border-radius:15px;
}
</style>
