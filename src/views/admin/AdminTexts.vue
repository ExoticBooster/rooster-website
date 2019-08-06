<template>
  <v-layout row wrap>
    <v-flex lg5 offset-lg1 v-if="faqSize> 1">
      <p>hallo</p>
    </v-flex>
    <v-flex lg5 offset-lg1>
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 lg12 class="mt-2">
          <h2>Frage und Antwort erstellen:</h2>
        </v-flex>
        <v-flex xs10 offset-xs1 md10 lg10 class="mt-5">
          <h3>Frage:</h3>
          <v-textarea box
          v-model="question">
          </v-textarea>
        </v-flex>
        <v-flex offset-xs1 xs10 md10 lg10 class="mt-5">
          <h3>Antwort:</h3>
          <v-textarea box
          v-model="answer">
          </v-textarea>
        </v-flex>
        <v-flex offset-lg4 offset-xs3>
          <v-btn color="success" @click="save">
            Speichern
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'AdminTexts',
  data() {
    return {
      question: '',
      answer: '',
    };
  },

  computed: {
    ...mapState([
      'faq',
    ]),
    ...mapGetters([
      'faqSize',
    ]),
  },


  methods: {
    async save() {
      const context = {
        question: this.question,
        answer: this.answer,
      };

      const res = await this.$store.dispatch('createQandA', context);
      if (res) {
        console.log('save');
      } else {
        console.log('did not work');
      }
    },

    loadContent() {
      this.$store.dispatch('loadfaq');
    },
  },

  beforeMount() {
    this.loadContent();
  },
};
</script>
