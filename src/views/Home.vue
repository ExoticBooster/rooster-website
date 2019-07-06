<template>
  <v-layout justify-center>
    <v-flex xs10 sm6 offset-sm3>
      <v-card class="mt-4">
        <v-img
          class="white--text"
          height="200px"
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
          <v-btn flat color="Light Blue">mehr...</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>


export default {
};
</script>
