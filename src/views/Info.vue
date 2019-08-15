<template>
    <v-layout row wrap justify-center>
        <v-flex lg11 class="text-lg-center my-4">
            <div class="stuff"> Fragen & Antworten</div>
        </v-flex>
        <!-- Es sollen hier zwei Spalten angelegt werden. Diese sollen gleich viel mit einträgen gefüllt werde.
        Das Ziel ist es also aktuell die Menge an einträgen anzuschauen und dann bis zur aufgerundeten Hälfte links zu füllen
        und dann den rest auf der rechten Seite zu füllen. -->
        <v-flex md4 lg4>
            <v-layout column wrap>
                <v-flex v-for="entry in faqFirstHalf" :key=entry.index>
                    <v-card flat>
                        <v-card-title>
                            {{entry.question}}
                        </v-card-title>
                        <v-card-text>
                            {{entry.answer}}
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex md4 lg4 offset-lg1>
            <v-layout column>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {

  computed: {
    ...mapState([
      'faq',
    ]),
    ...mapGetters([
      'faqSize',
    ]),
    faqFirstHalf() {
      let filtered;
      return filtered;
    },
  },

  methods: {
    loadContent() {
      this.$store.dispatch('loadfaq');
    },
  },

  beforeMount() {
    this.loadContent();
  },
};
</script>

<style scoped>

.stuff{
  font-family: 'Karla', bold;
  font-size: 40px;
  color: #000B8E;
}

.v-card__title {
    font-family: 'Karla', bold;
    font-size: 18px;
    padding: 16px;
    padding-bottom: 5px;
}

.v-card__text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding-top: 0px;
    padding-left: 16px;
    width: 100%;
}
</style>
