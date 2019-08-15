<template>
  <v-layout justify-center row wrap>
    <!-- wrapper for cars-->
    <v-flex :md5="toEdit">
      <v-layout justify-center wrap v-if="faqSize> 1">
        <v-flex :md3="!toEdit" :md12="toEdit" v-for="entry in faq" :key="entry.id" class="mx-4">
          <v-card
          class="mt-4 entry"
          @click="()=>{currentID = entry.id;}"
          >
            <v-card-title class="title">{{entry.question}}</v-card-title>
            <v-card-text class="longText">{{entry.answer}}</v-card-text>
            <v-card-actions v-if="currentID === entry.id">
              <v-btn color="success" v-on:click="loadEntry(entry.id)">Bearbeiten</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="error">Löschen</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md5 lg5 offset-lg1 offset-md1 v-if="toEdit">
      <v-layout row wrap class="edit">
        <v-flex xs10 offset-xs1 lg12 class="mt-2">
          <h2>Frage und Antwort bearbeiten:</h2>
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
          <v-btn color="success" v-on:click="save">
            Speichern
          </v-btn>
          <v-btn color="red darken-1" style="color: white" v-on:click="cancel">
            Abbrechen
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
      currentID: '',
      //  boolean set when the user wants to create a new Entry
      toCreate: false,
      //  boolean set when the user wants to edit an Entry
      toEdit: false,
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
    loadEntry(id) {
      this.currentID = id;
      this.question = this.faq[id].question;
      this.answer = this.faq[id].answer;
      this.toEdit = true;
    },

    cancel() {
      this.currentID = '';
      this.question = '';
      this.answer = '';
      this.toEdit = false;
    },

    save() {
      const context = {
        question: this.question,
        answer: this.answer,
        id: this.currentID,
      };

      const res = this.$store.dispatch('updateFAQ', context);
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

<style>
  .edit{
    position: fixed
  }

  .longText{
    display:  -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 103px;
  }

  .entry :hover{
    cursor: pointer;
  }
</style>
