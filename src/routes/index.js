import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '../layout'
import Login from '../views/Login';
import Join from '../views/Join';
import Find from '../views/Find';
import Home from '../views/Home';
import Follow from '../views/Follow';
import Setting from '../views/Setting';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', //# 해시 제거
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Layout,
      redirect: '/home/main',
      children: [
        {
          path: 'main',
          component: Home,
          name: 'home'
        },
        {
          path: 'follow',
          component: Follow,
          name: 'follow'
        },
        {
          path: 'setting',
          component: Setting,
          name: 'setting'
        }
      ]
    }
  ]
});