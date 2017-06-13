import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import CreateHouse from '@/components/CreateHouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/add',
      component: CreateHouse
    }
  ]
})
