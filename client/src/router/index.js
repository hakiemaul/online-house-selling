import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import CreateHouse from '@/components/CreateHouse'
import House from '@/components/House'

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
    },
    {
      path: '/house',
      component: House
    }
  ]
})
