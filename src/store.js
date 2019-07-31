import Vue from 'vue';
import Vuex from 'vuex';

import { log } from '@/utils';
import { auth, db } from '@/firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    authenticated: localStorage.getItem('authenticated') || false,
    authPending: false,
    loginErrorMessage: null,
    tours: {},
    bookings: {},
    navItems: [
      { title: 'Infos', to: 'info' },
      { title: 'Törns', to: 'tours' },
      { title: 'Gallerie', to: 'gallery'}
    ],
  },

  getters: {
    toursSize(state) {
      return Object.keys(state.tours).length;
    },
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      state.authenticated = !!user;
      localStorage.setItem('authenticated', state.authenticated);
    },
    setLoginErrorMessage(state, msg) {
      state.loginErrorMessage = msg;
    },
    addTour(state, { id, tour }) {
      Vue.set(state.tours, id, tour);
    },
    addBooking(state, { id, booking }) {
      Vue.set(state.bookings, id, booking);
    },
    setAuthPending(state, pending) {
      state.authPending = pending;
    },
  },

  actions: {
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

    async loadBookings(state) {
      let snapshot;
      try {
        snapshot = await db.collection('bookings').get();
      } catch (e) {
        log(e);
        return;
      }

      snapshot.docs.forEach((doc) => {
        const booking = doc.data();
        booking.id = doc.id;
        state.commit('addBooking', {
          id: booking.id,
          booking,
        });
      });
    },

    async loadBooking({ commit, state }, id) {
      if (state.bookings[id]) {
        log('Booking already loaded');
        return;
      }

      let doc;
      try {
        doc = await db.collection('booking').doc(id).get();
      } catch (e) {
        log(e);
        return;
      }

      if (!doc.exists) {
        log('Booking not found');
        return;
      }

      commit('addBooking', { id, booking: doc.data() });
    },

    async bookTour(ctx, booking) {
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

// realtime updates for tours
// TODO: handle delete
db.collection('tours').onSnapshot((querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    const tour = change.doc.data();
    tour.id = change.doc.id;
    store.commit('addTour', { id: change.doc.id, tour });
  });
}, (err) => {
  log(`Encountered error: ${err}`);
});

db.collection('bookings').onSnapshot((querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    const booking = change.doc.data();
    booking.id = change.doc.id;
    store.commit('addBooking', { id: change.doc.id, booking });
  });
}, (err) => {
  log(`Encountered error: ${err}`);
});

export default store;
