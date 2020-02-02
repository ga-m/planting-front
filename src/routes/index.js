import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Follow from '../views/Follow';
import Setting from '../views/Setting';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', //# 해시 제거
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/follow',
      name: 'follow',
      component: Follow
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
});