<template>
  <v-layout justify-center>
    <v-flex xs10 sm6 offset-sm3>
      <v-card class="mt-4">
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
          <v-btn flat color="Light Blue">mehr...</v-btn>
        </v-card-actions>
      </v-card>

      <v-carousel :cycle="true">
        <v-carousel-item
        v-for="tour in tours"
        :key="tour.name"
        >
          <v-card class="mt-4">
            <v-img
              class="white--text"
              height="175px"
              v-bind:src="tour.img"
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
              <div>
                <span>{{tour.subtitle}}</span><br>
                <span>{{tour.text}}</span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="Light Blue">mehr...</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      tours: [
        {
          title: 'Travemünde',
          subtitle: 'Travemünder Woche 2019',
          text: '05.07.2019 - 18.08.2019 \n Es geht wieder die Travemünder Woche los und ich möchte euch mitnehmen!',
          img: 'https://images.unsplash.com/photo-1526908234827-dcf46d772c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
        },
        {
          title: 'Kiel',
          subtitle: 'Kieler Woche 2019',
          text: '018.06.2019 - 3.07.2019 \n Es geht wieder die Kiel Woche los und ich möchte euch mitnehmen!',
          img: 'https://images.unsplash.com/photo-1560754325-f7116aee22b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
        {
          title: 'Karibik',
          subtitle: 'karibiksegeln 2018',
          text: '018.06.2018 - 3.07.2018 \n Es geht wieder in die Karibik und ich nehme gerne meinen Sohn umsonst mit!',
          img: 'https://images.unsplash.com/photo-1542213448375-a03409f44bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        },
      ],
    };
  },
};
</script>
