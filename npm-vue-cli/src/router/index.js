import Vue from 'vue';
import VueRouter from 'vue-router';

import Element from '../components/element/element.vue';
import Dynamic from '../components/dynamic/dynamic.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Element
  },
  {
    path: '/dynamic',
    component: Dynamic
  }
];

export default new VueRouter({
  routes: routes
});
