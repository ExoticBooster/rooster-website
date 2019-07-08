<template>
  <v-layout justify-center>
    <v-flex xs10 sm6>

      <!-- About Me Start -->
      <v-card class='mt-4 elevation-1'>
        <v-img
          class="white--text"
          height="175px"
          src="https://images.unsplash.com/photo-1543003743-993c0632996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        >
          <v-container fill-height fluid>
            <v-layout fill-height justify-center>
              <v-flex xs12 align-end flexbox >
                <span class="headline black--text">Mein Boot und Ich</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>Moin Moin</span><br>
            <span>Ich bin Stefan und werde euch in dieser tollen
               Karte mich selbst und mein Boot vorstellen!</span>
          </div>
        </v-card-title>
         <v-card-actions>
          <v-btn flat color="">mehr</v-btn>
        </v-card-actions>
      </v-card>
      <!-- About Me end -->
      <!-- Tour Carousel Begin -->
      <v-carousel class="elevation-0" hide-controls hide-delimiters>
        <v-carousel-item
        v-for="tour in tours"
        :key="tour.name"
        >
          <v-card class="mt-4">
            <v-img
              class="white--text"
              height="175px"
              v-bind:src="tour.mainImg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height justify-center>
                  <v-flex xs12 align-end flexbox >
                    <span class="headline black--text">{{tour.title}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div class="pl-4">
                <span>{{tour.subtitle}}</span><br>
                <span>{{tour.text | truncate(80, '...')}}</span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
              flat color="Light Blue"
              v-on:click=loadDetails(tour)
              >mehr</v-btn>
            </v-card-actions>
            </v-card>
        </v-carousel-item>
      </v-carousel>
      <!-- Tour Carousel End -->
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    loadDetails(tour) {
      // eslint-disable-next-line
      this.$router.push('/details/' + tour.title);
    },
  },
  filters: {
    truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      }
      return text;
    },
  },
  computed: {
    tours() {
      return this.$store.getters.alltours;
    },
  },
};
</script>
