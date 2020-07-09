import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './route'

Vue.use(VueRouter)

const routerConfig = {
  mode: 'history',
  linkActiveClass: 'active',
  routes: routers
}

const router = new VueRouter(routerConfig)

export default router
