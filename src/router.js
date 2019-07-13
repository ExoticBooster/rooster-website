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
      component: loadView('tour/TourDetails'),
    },
    {
      path: '/tour/:id/book/:event',
      name: 'tourBooking',
      component: loadView('tour/TourBooking'),
    },
    {
      path: '/tour/:id/gallery',
      name: 'tourGallery',
      component: loadView('tour/TourGallery'),
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
    },
    {
      path: '/admin',
      component: loadView('admin/AdminWrapper'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name: 'admin',
          component: loadView('admin/AdminHome'),
        },
      ],
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: loadView('Imprint'),
    },
    {
      path: '/dataprotection',
      name: 'dataprotection',
      component: loadView('Dataprotection'),
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    }
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
