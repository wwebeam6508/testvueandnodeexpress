import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: window.location.origin,
  routes: [
    {
      path: '',
      component: Main,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/home/Home.vue')
        }
      ]
    },
  ]
})
