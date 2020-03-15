import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '../layout'
import Login from '../views/Login';
import Join from '../views/Join';
import Find from '../views/Find';
import Home from '../views/Home';
import Follow from '../views/Follow';
import Setting from '../views/Setting';
import Member from '../views/Member';
import Term from '../views/Term';
import Issue from '../views/Issue';
import Guide from '../views/Guide';
import Credit from '../views/Credit';

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
          name: 'myHome',
          children: [
            {
              path: ':nickname',
              component: Home,
              name: 'otherHome'
            }
          ]
        },
        {
          path: 'follow',
          component: Follow,
          name: 'follow',
        },
        {
          path: 'setting',
          component: Setting,
          redirect: '/home/setting/member',
          children: [
            {
              path: 'member',
              component: Member,
              name: 'member'
            },
            {
              path: 'term',
              component: Term,
              name: 'term'
            },
            {
              path: 'guide',
              component: Guide,
              name: 'guide'
            },
            {
              path: 'issue',
              component: Issue,
              name: 'issue'
            },
            {
              path: 'credit',
              component: Credit,
              name: 'credit'
            },
          ]
        }
      ]
    }
  ]
});