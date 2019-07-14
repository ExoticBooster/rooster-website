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
    messages: {},
  },

  getters: {
    toursSize(state) {
      return Object.keys(state.tours).length;
    },
    getBookingMessages(state) {
      return bookingId => state.messages[bookingId];
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
    addMessage(state, { id, message }) {
      const bookingId = message.booking;
      if (!state.messages[bookingId]) {
        Vue.set(state.messages, bookingId, {});
      }

      Vue.set(state.messages[bookingId], id, message);
    },
    setAuthPending(state, pending) {
      state.authPending = pending;
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      let user;

      commit('setAuthPending', true);
      commit('setLoginErrorMessage', null);

      try {
        user = await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit('setLoginErrorMessage', error.message);
      }

      commit('setAuthPending', false);
      return user;
    },

    async logout() {
      try {
        await auth.signOut();
      } catch (e) {
        log(e);
      }
    },

    async loadTours({ commit }) {
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
        commit('addTour', {
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

    async loadBookings({ commit }) {
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
        commit('addBooking', {
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

    async loadMessages({ commit }, bookingId) {
      let snapshot;
      try {
        snapshot = await db.collection('bookings').where('booking', '=', bookingId).get();
      } catch (e) {
        log(e);
        return;
      }

      snapshot.docs.forEach((doc) => {
        const message = doc.data();
        message.id = doc.id;
        commit('addMessage', {
          id: message.id,
          message,
        });
      });
    },

    async bookTour({ dispatch }, booking) {
      const { message } = booking;
      booking.created = new Date();

      let res;
      try {
        res = await db.collection('bookings').add(booking);
      } catch (e) {
        log(e);
        return false;
      }

      if (res.id && message) {
        // send Message to owner
        dispatch('sendMessage', {
          booking: res.id,
          text: message,
          from: booking.email,
          notify: false,
        });
      }

      return true;
    },

    async sendMessage(ctx, _message) {
      const message = {
        from: 'me',
        created: new Date(),
        read: false,
        notify: true,
        ..._message,
      };

      // do not send empty messages
      if (!message.text) return false;

      try {
        await db.collection('messages').add(message);
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

db.collection('messages').onSnapshot((querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    const message = change.doc.data();
    message.id = change.doc.id;
    store.commit('addMessage', { id: change.doc.id, message });
  });
}, (err) => {
  log(`Encountered error: ${err}`);
});

export default store;
