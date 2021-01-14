import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// components
import CFP from '../pages/CFP.vue';
import Info from '../pages/Info.vue';

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/cfp',
    meta: {
      index: 0,
      label: 'SITCON 2021',
      menuItem: true
    }
  },
  {
    path: '/cfp',
    name: 'CFP',
    component: CFP,
    meta: {
      menuItem: false
    }
  },
  {
    path: '/cfp/info',
    name: 'CFP',
    component: Info,
    meta: {
      menuItem: false
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: '/2021',
  routes
});

export default router;
