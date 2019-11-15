import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

import ProjectsIndex from '@/views/projects/ProjectsIndex.vue'
import ProjectsShow from '@/views/projects/ProjectsShow.vue'

import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (!store.getters['auth/authenticated']) {
          next({ name: 'login' })
        }

        next()
      }
    },
    {
      path: '/projects',
      name: 'projects-index',
      component: ProjectsIndex
    },
    {
      path: '/projects/:id',
      name: 'projects-show',
      component: ProjectsShow
    },
  ]
})
