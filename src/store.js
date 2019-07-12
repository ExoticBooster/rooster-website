import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

const fb = require('./firebase.js');

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],

  state: {
    user: null,
    loginErrorMessage: null,
    tours: {},
  },

  getters: {
    toursSize(state) {
      return Object.keys(state.tours).length;
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoginErrorMessage(state, msg) {
      state.loginErrorMessage = msg;
    },
    addTour(state, { id, tour }) {
      Vue.set(state.tours, id, tour);
    },
  },

  actions: {
    async loadTours(state) {
      let snapshot;
      try {
        // TODO: add where to only get future tours
        snapshot = await fb.db.collection('tours').get();
      } catch (e) {
        console.log(e);
        return;
      }

      snapshot.docs.forEach((doc) => {
        const tour = doc.data();
        tour.id = doc.id;
        state.commit('addTour', {
          id: tour.id,
          tour,
        });
      });
    },

    async login(state, payload) {
      let user;

      state.commit('setLoginErrorMessage', null);

      try {
        user = await fb.auth.signInWithEmailAndPassword(payload.email, payload.password);
      } catch (error) {
        state.commit('setLoginErrorMessage', error.message);
      }

      state.commit('setUser', user);
    },

    async loadTour({ commit, state }, id) {
      if (state.tours[id]) {
        console.log('Tour already loaded');
        return;
      }

      let doc;
      try {
        doc = await fb.db.collection('tours').doc(id).get();
      } catch (e) {
        console.error(e);
      }

      if (!doc.exists) {
        console.log('Tour not found');
        return;
      }

      commit('addTour', { id, tour: doc.data() });
    },
  },
});
