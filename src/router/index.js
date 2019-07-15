import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../components/home/Home'
import City from '../components/city/City'
import Attractions from '../components/attractions/Attractions'

export default new Router({
  routes: [
    {
      name:'Home',
      path:'/',
      component:Home
    },
    {
      name:'City',
      path:'/city',
      component:City
    },
    {
      name:'attractionslink',
      path:'/attractions/:id',
      component:Attractions
    },

  ]
})
