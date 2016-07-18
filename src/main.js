import Vue from 'vue'
import VueRouter from 'vue-router'

import Restaurants from './components/Restaurants'
import App from './App'

Vue.use(VueRouter)

let router = new VueRouter({
  hashbang: false
})

router.redirect({
  '/': '/restaurants'
})

router.map({
  '*': {
    component: {
      template: `
      <div>
        <h1>Not Found</h1>
      </div>
      `
    }
  },
  'restaurants': {
    component: Restaurants
  }
})

router.start(App, '#app')
