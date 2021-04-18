import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Classify = () => import('../views/category/Classify.vue')
const Personage = () => import('../views/proflie/Personage.vue')
const Details = () => import('../views/details/Details.vue')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.replace

VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'default',
    component: Home
  },
 {
   path: '/home',
   name: 'Home',
   component: Home
 },
 {
   path: '/cart',
   name: 'Cart',
   component: Cart
 },
 {
   path: '/classify',
   name: 'Classify',
   component: Classify
 },
 {
   path: '/personage',
   name: 'Personage',
   component: Personage
 },
 {
   path: '/details:iid',
   name: 'Details',
   component: Details
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
