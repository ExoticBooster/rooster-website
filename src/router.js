import Vue from 'vue';
import Router from 'vue-router';

import { auth } from './firebase';

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (name.[hash].js) for this route
// which is lazy-loaded when the route is visited.
function loadView(...view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view.join('/')}.vue`);
}

const router = new Router({
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
      component: loadView('Admin'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { currentUser } = auth;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
