import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})
