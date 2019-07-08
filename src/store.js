import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tours: [
      {
        title: 'Travemünde',
        subtitle: 'Travemünder Woche 2019',
        text: 'Es geht wieder die Travemünder Woche los und ich möchte euch mitnehmen!', 
        mainImg: 'https://images.unsplash.com/photo-1526908234827-dcf46d772c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
        img: [],
        startDate: '05.07.2019',
        endDate: '18.08.2019',
      },
      {
        title: 'Kiel',
        subtitle: 'Kieler Woche 2019',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna naliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        mainImg: 'https://images.unsplash.com/photo-1560754325-f7116aee22b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        img:
          [

          ],
        startDate: '18.06.2019',
        endDate: '3.07.2019',
      },
      {
        title: 'Karibik',
        subtitle: 'karibiksegeln 2018',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        mainImg: 'https://images.unsplash.com/photo-1542213448375-a03409f44bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        img:
        [
          'https://images.unsplash.com/photo-1547812489-a5ed6c0a5b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
          'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1191&q=80',
          'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
          'https://images.unsplash.com/photo-1541526855570-9154d61f6a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          'https://images.unsplash.com/photo-1446052822510-19cf420ca93b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
          'https://images.unsplash.com/photo-1470081766425-a75c92adff0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        ],
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
