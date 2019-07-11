import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const fb = require('./firebase.js');

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    user: null,
    loginErrorMessage: null,
    tours: {},
  },

  getters: {
    alltours(state) {
      return state.tours;
    },
    tourByID(state) {
      return id => state.tours[id];
    },
    getUser(state) {
      return state.user;
    },
    getLoginErrorMessage(state) {
      return state.loginErrorMessage;
    },
    getImg(state) {
      return state.img;
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
      state.tours[id] = tour;
    },
    setImg(state, payload) {
      state.img = payload;
    },
  },

  actions: {
    async loadCategories(state) {
      let snapshot;
      try {
        snapshot = await fb.db.collection('categtories').get();
      } catch (e) {
        console.log(e);
        return;
      }

      snapshot.forEach((doc) => {
        const tour = doc.data();
        tour.docID = doc.id;
        state.commit('addTour', {
          id: doc.id,
          tour,
        });
      });
    },

    async login(state, payload) {
      let user;

      try {
        user = await fb.auth.signInWithEmailAndPassword(payload.email, payload.password);
      } catch (error) {
        state.commit('setLoginErrorMessage', error.message);
        return;
      }

      state.commit('setLoginErrorMessage', null);
      state.commit('setUser', user);
    },

    async loadCategory({ commit }, tourId) {
      // TODO: only load if not already?

      let snapshot;
      try {
        snapshot = await fb.db.collection(`categories/${tourId}`).get();
      } catch (e) {
        console.error(e);
      }

      const data = snapshot.docs().shift();
      console.log(data);
      if (data) {
        commit('addTour', data);
      }
    },
  },
});
