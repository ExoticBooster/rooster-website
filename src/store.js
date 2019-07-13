import Vue from 'vue';
import Vuex from 'vuex';

import { log } from '@/utils';
import { auth, db } from '@/firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    authPending: false,
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
    setAuthPending(state, pending) {
      state.authPending = pending;
    },
  },

  actions: {
    async loadTours(state) {
      let snapshot;
      try {
        // TODO: add where to only get future tours
        snapshot = await db.collection('tours').get();
      } catch (e) {
        log(e);
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

    async login(state, { email, password }) {
      let user;

      state.commit('setAuthPending', true);
      state.commit('setLoginErrorMessage', null);

      try {
        user = await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        state.commit('setLoginErrorMessage', error.message);
      }

      // state.commit('setUser', user);
      state.commit('setAuthPending', false);
      return user;
    },

    async logout() {
      try {
        await auth.signOut();
      } catch (e) {
        log(e);
      }
    },

    async loadTour({ commit, state }, id) {
      if (state.tours[id]) {
        log('Tour already loaded');
        return;
      }

      let doc;
      try {
        doc = await db.collection('tours').doc(id).get();
      } catch (e) {
        log(e);
        return;
      }

      if (!doc.exists) {
        log('Tour not found');
        return;
      }

      commit('addTour', { id, tour: doc.data() });
    },

    async bookTour({}, booking) {
      booking.created = new Date();

      try {
        await db.collection('bookings').add(booking);
      } catch (e) {
        log(e);
        return false;
      }

      return true;
    },
  },
});

auth.onAuthStateChanged((user) => {
  // update user in store on firbase auth state changes
  store.commit('setUser', user || null);
});


export default store;
