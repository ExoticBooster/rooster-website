import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (name.[hash].js) for this route
// which is lazy-loaded when the route is visited.
function loadView(...view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view.join('/')}.vue`);
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
    },
    {
      path: '/tour/:id',
      name: 'tour',
      component: loadView('TourDetails'),
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requiresAuth: true,
      },
      component: loadView('Admin'),
      beforeEnter(to, from, next) {
        if (store.getters.getUser == null) {
          next('/login');
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
    },
  ],
});
