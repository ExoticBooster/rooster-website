import Vue from 'vue';
import Vuex from 'vuex';

const fb = require('./firebase.js');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    loginErrorMessage: null,
    tours: [
      {
        title: 'Travemünder Woche',
        subtitle: 'Travemünder Woche 2019',
        text: 'Während das umfangreiche Programm läuft, seid ihr auf dem Wasser mittendrin statt nur dabei und erlebt das Segelevent hautnah.',
        mainImg: 'https://images.unsplash.com/photo-1526908234827-dcf46d772c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
        img: [],
        startDate: '19.07.2019',
        endDate: '28.08.2019',
        angebote: [
          {
            startDate: '19.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '19.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '19.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '20.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '20.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '20.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '21.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '21.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '21.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '22.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '22.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '22.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '23.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '23.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '23.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '24.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '24.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '24.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '25.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '25.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '25.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '26.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '26.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '26.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '27.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '27.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '27.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
          {
            startDate: '28.07.2019',
            startTime: '11:00',
            endTime: '14:00',
            title: 'Vormittagstörn',
            gebucht: false,
          },
          {
            startDate: '28.07.2019',
            startTime: '15:00',
            endTime: '18:00',
            title: 'Nachmittagstörn',
            gebucht: false,
          },
          {
            startDate: '28.07.2019',
            startTime: '19:00',
            endTime: '22:00',
            title: 'Abend-törn',
            gebucht: false,
          },
        ],
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
        endDate: '03.07.2019',
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
          'https://images.unsplash.com/photo-1470081766425-a75c92adff0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        ],
        startDate: '05.07.2019',
        endDate: '19.07.2019',
        angebote: [
          {
            startDate: '08.07.2019',
            startTime: '18:00',
            endTime: '20:00',
            title: 'Abendregatter',
            gebucht: false,
          },
          {
            startDate: '09.07.2019',
            startTime: '09:00',
            endTime: '15:00',
            title: 'Frühstückssegeln',
            gebucht: true,
          },
        ],
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
    getUser(state) {
      return state.user;
    },
    getLoginErrorMessage(state) {
      return state.loginErrorMessage;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoginErrorMessage(state, msg) {
      state.loginErrorMessage = msg;
    },
  },
  actions: {
    login(state, payload) {
      fb.auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          state.commit('setLoginErrorMessage', null);
          state.commit('setUser', user);
        })
        .catch((error) => {
          state.commit('setLoginErrorMessage', error.message);
        });
    },
  },
});
