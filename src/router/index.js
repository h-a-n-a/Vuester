import Vue from 'vue'
import VueRouter from 'vue-router'

// dynamic import routes
const home = () => import('../views/Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  }
]

const router = new VueRouter({
  mode: 'hash', // history
  routes
})

export default router
