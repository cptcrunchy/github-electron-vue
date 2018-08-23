'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGit, faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import routes from './routes'
import App from './components/App.vue'
import store from './store'
import {init as initAuth} from './auth'


Vue.use(Vuetify)
Vue.use(VueRouter)
library.add(faGit, faGithub, faGithubAlt, faCodeBranch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'hash',
  routes,
  base: __dirname
})

store.dispatch('initApp').then(() => {
  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })

  initAuth(store)
}, (err) => {
  console.log('Error wile initializing', err)
  // TODO: Warn user but should not occur...
})
