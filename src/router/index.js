import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import SideMenu from '@/pages/SideMenu';
import Draggable from '@/pages/Draggable';
import StyleGuide from '@/pages/StyleGuide';
// import Images from '@/pages/Images';
import VueLibList from '@/pages/VueLibList';
import TippyClicky from '@/pages/TippyClicky';
import Breakpoints from '@/pages/BreakPoints';
// import Profile from '@/pages/Profile';

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
    /* {
      path: '/images',
      name: 'Images',
      component: Images,
      meta: {
        title: `${siteTitle} - Images`
      }
    }, */
    {
      path: '/tippyclicky',
      name: 'TippyClicky',
      component: TippyClicky,
      meta: {
        title: `${siteTitle} - TippyClicky`
      }
    },
    {
      path: '/styleguide',
      name: 'StyleGuide',
      component: StyleGuide,
      meta: {
        title: `${siteTitle} - StyleGuide`
      }
    },
    {
      path: '/breakpoints',
      name: 'Breakpoints',
      component: Breakpoints,
      meta: {
        title: `${siteTitle} - Breakpoints`
      }
    },
    /* {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: `${siteTitle} - Profile`
      }
    }, */
    {
      path: '/vueliblist',
      name: 'VueLibList',
      component: VueLibList,
      meta: {
        title: `${siteTitle} - VueLibList`
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
