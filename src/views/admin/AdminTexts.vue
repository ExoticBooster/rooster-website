<template>
  <v-layout row wrap>
    <v-flex lg5 offset-lg1>

    </v-flex>
    <v-flex lg5 offset-lg1>
      <v-layout row wrap>
        <v-flex lg12 class="mt-2">
          <h2>Frage und Antwort erstellen:</h2>
        </v-flex>
        <v-flex md10 lg10 class="mt-5">
          <h3>Frage:</h3>
          <v-textarea box>
          </v-textarea>
        </v-flex>
        <v-flex md10 lg10 class="mt-5">
          <h3>Antowort:</h3>
          <v-textarea box>
          </v-textarea>
        </v-flex>
        <v-flex offset-lg4>
          <v-btn color="success">
            Speichern
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AdminTexts',
};
</script>
