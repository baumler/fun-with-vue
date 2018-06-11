import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import SideMenu from '@/pages/SideMenu';
import Draggable from '@/pages/Draggable';
import Images from '@/pages/Images';

Vue.use(Router);

const siteTitle = 'Vue fun';

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: `${siteTitle} - Home`
      }
    },
    {
      path: '/sidemenu',
      name: 'Side Menu',
      component: SideMenu,
      meta: {
        title: `${siteTitle} - Menu`,
        requiresAuth: true
      }
    },
    {
      path: '/draggable',
      name: 'Draggable',
      component: Draggable,
      meta: {
        title: `${siteTitle} - Draggable`
      }
    },
    {
      path: '/images',
      name: 'Images',
      component: Images,
      meta: {
        title: `${siteTitle} - Images`
      }
    }
  ],
  linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title; // change title
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    /* if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    } */
  }
  next();
});

export default router;
