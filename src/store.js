import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tours: [
      {
        title: 'Travemünde',
        subtitle: 'Travemünder Woche 2019',
        text: '\n Es geht wieder die Travemünder Woche los und ich möchte euch mitnehmen!',
        mainImg: 'https://images.unsplash.com/photo-1526908234827-dcf46d772c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
        img: [],
        startDate: '05.07.2019',
        endDate: '18.08.2019',
      },
      {
        title: 'Kiel',
        subtitle: 'Kieler Woche 2019',
        text: '\n Es geht wieder die Kiel Woche los und ich möchte euch mitnehmen!',
        mainImg: 'https://images.unsplash.com/photo-1560754325-f7116aee22b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        img:
          [
            'https://images.unsplash.com/photo-1547812489-a5ed6c0a5b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
          ],
        startDate: '18.06.2019',
        endDate: '3.07.2019',
      },
      {
        title: 'Karibik',
        subtitle: 'karibiksegeln 2018',
        text: '018.06.2018 - 3.07.2018 \n Es geht wieder in die Karibik und ich nehme gerne meinen Sohn umsonst mit!',
        mainImg: 'https://images.unsplash.com/photo-1542213448375-a03409f44bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        img: [],
        startDate: '05.07.2019',
        endDate: '18.08.2019',
      },
    ],
  },
  getters: {
    alltours(state) {
      return state.tours;
    },
    // eslint-disable-next-line
    tourByName: (state) => (title) => {
      // eslint-disable-next-line
      return state.tours.filter(tour => tour.title.match(title));
    },
  },
  mutations: {

  },
  actions: {

  },
});
