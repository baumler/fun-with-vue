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
import FocusLock from '@/pages/FocusLock';
import Calendar from '@/pages/A11yCalendar';
import GridFun from '@/pages/GridFun';
import BottomFixedButton from '@/pages/BottomFixedButton';
import p404 from '@/pages/errors/404';
import CardPage from '@/pages/Cards';

Vue.use(Router);

const siteTitle = 'Vue fun';

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/sidemenu',
      name: 'Side Menu',
      component: SideMenu,
      meta: {
        title: 'Menu',
        requiresAuth: true
      }
    },
    {
      path: '/draggable',
      name: 'Draggable',
      component: Draggable,
      meta: {
        title: 'Draggable'
      }
    },
    /* {
      path: '/images',
      name: 'Images',
      component: Images,
      meta: {
        title: 'Images'
      }
    }, */
    {
      path: '/tippyclicky',
      name: 'TippyClicky',
      component: TippyClicky,
      meta: {
        title: 'TippyClicky'
      }
    },
    {
      path: '/styleguide',
      name: 'StyleGuide',
      component: StyleGuide,
      meta: {
        title: 'StyleGuide'
      }
    },
    {
      path: '/breakpoints',
      name: 'Breakpoints',
      component: Breakpoints,
      meta: {
        title: 'Breakpoints'
      }
    },
    {
      path: '/focuslock',
      name: 'FocusLock',
      component: FocusLock,
      meta: {
        title: 'FocusLock'
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        title: 'Calendar'
      }
    },
    {
      path: '/grid',
      name: 'Grid',
      component: GridFun,
      meta: {
        title: 'Grid'
      }
    },
    {
      path: '/fixedBottom',
      name: 'FixedToBottom',
      component: BottomFixedButton,
      meta: {
        title: 'FixedToBottom'
      }
    },
    {
      path: '/cards',
      name: 'Cards',
      component: CardPage,
      meta: {
        title: 'Cards'
      }
    },
    {
      path: '/vueliblist',
      name: 'VueLibList',
      component: VueLibList,
      meta: {
        title: 'VueLibList'
      }
    },
    // do not include 'name' for these so they do not show up in the navigation list
    { path: '/404', component: p404 },
    { path: '*', redirect: '/404' }
  ],
  linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  document.title = `${siteTitle} - ${to.meta.title}`; // change title
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
