import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Contact from './views/contact'
import Competitions from './views/competitions'
import Gear from './views/gear'
import Training from './views/training'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:'/',
      name: 'home',
      component :Home

    },
    {
      path:'/contact',
      name: 'contact',
      component :Contact

    },
    {
      path:'/competitions',
      name: 'competitions',
      component :Competitions

    },
    {
      path:'/gear',
      name: 'gear',
      component :Gear

    },
    {
      path:'/training',
      name: 'training',
      component :Training

    },
  ]
})

export default router
