<template>
  <v-layout row wrap justify-center>
    <v-flex xs10 sm12 md12 lg12
    >

      <!-- Card erst mal raus genommen um die vorherige variante zu erhalten -->
      <!-- About Me Start -->
      <!-- <v-card lg12 md12 class='mx-0 my-0 elevation-1' full-width>
        <v-img
          class="white--text"
          height="175px"
          src="https://images.unsplash.com/photo-1543003743-993c0632996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
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
          <v-btn flat :to="{name: 'about'}">mehr</v-btn>
        </v-card-actions>
      </v-card> -->
      <!-- About Me end -->

      <v-carousel
        @hover="()=> {hide = !hide}"
        hide-delimiters
        hide-controls
        height="40%"
        class="pb-0"
      >
      <v-carousel-item>
        <v-img
        class="mainImg"
        conatin
        mb-5
        src="https://firebasestorage.googleapis.com/v0/b/rooster-4faf7.appspot.com/o/IMG_20190623_132901.jpg?alt=media&token=ea2b0385-2b90-4952-9f7d-1ddb678b2936"
        ></v-img>
      </v-carousel-item>
      </v-carousel>

      <v-layout row fluid class="blue lighten-4">
        <v-flex class="md5 pt-4 px-4" offset-md1>
          <section>
            <h3 class=title> Hallo willkommen bei "Rooster" on the sea!
            Mitsegeln auf der Ostsee, individuelle Segeltörns mit kleiner Crew... </h3>
            <br>
            <p class="body-1">
              Seit 2007 organisiere ich Törns zum Mitsegeln auf der Ostsee und im Mittelmeer. Das Angebot einen Segeltörn mit einer Crew, (6 Personen plus Skipper) zu erleben, erfreut sich großer Beliebtheit. Mit einer kleinen Crew segelt es sich entspannter und jeder Teilnehmer hat die Möglichkeit sich an der Schiffsführung zu beteiligen. Navigation, Segel setzen und trimmen, einen gemeinsam festgelegten Kurs steuern. Ich als Skipper gebe Dir Tipps und Du kannst von meiner Erfahrung und den Revierkenntnissen profitieren. <br>
              Dabei sehe ich mich nicht in der Rolle als "Sailing Master" Leutnant William Bligh, sondern als teil der Mannschaft.
              Meine Törns führen im gesammten Baltischen Meer. <br>

              Alle Infos findest du <v-btn class="ml-0 pl-0" flat small>hier</v-btn>
              <br>

              Du möchtest das Segeln kennen lernen und statt einer Woche gerne einen kurzen Törn über 1; 2 oder 3 Tage buchen? Schau in den Törnplan. <br>
              Wir sind mit der "Rooter" schnell unterwegs, allerdings steht das `Meilenreissen` nicht im Vordergrund, auch der URLAUB und die Entspannung sollen nicht zu kurz kommen! <br>
              Mit einer kleinen Crew hast Du immer die Möglichkeit das Schiff selbst zu segeln, navigieren... Mitsegeln einmal anders
            </p>
          </section>
        </v-flex>
        <v-flex class="md6 pt-4 ml-4 pr-4">
          <v-img
          src="https://firebasestorage.googleapis.com/v0/b/rooster-4faf7.appspot.com/o/IMG_1277.JPG?alt=media&token=d157d16d-062b-4488-a981-7bbeb697297d"
          >
          </v-img>
        </v-flex>
      </v-layout>

      <!-- Tour Carousel Begin
      <v-carousel v-if="toursSize > 0" class="elevation-0" hide-controls hide-delimiters :cycle="false">
        <v-carousel-item v-for="tour in tours" :key="tour.docID">
          <v-card class="mt-4">
            <v-img class="white--text" height="175px" :src="tour.cover">
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
                <span v-if="tour.subtitle">{{ tour.subtitle || ''}}</span><br>
                <h5 v-if="tour.startDate && tour.endDate">{{ tour.startDate }} - {{ tour.endDate }}</h5>
                <span>{{ tour.description | truncate(80, '...') }}</span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="Light Blue" :to="{ name: 'tour', params: { id: tour.id }}">mehr</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
      <v-progress-circular v-else :width="5" color="primary" indeterminate /> -->
      <!-- Tour Carousel End -->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      textleft: '',
      hide: false,
    };
  },
  filters: {
    truncate(description, length, suffix) {
      if (description.length > length) {
        return description.substring(0, length) + suffix;
      }
      return description;
    },
  },
  computed: {
    ...mapState([
      'tours',
    ]),
    ...mapGetters([
      'toursSize',
    ]),
  },
  beforeMount() {
    this.$store.dispatch('loadTours');
  },
};
</script>

<style scoped>

</style>
