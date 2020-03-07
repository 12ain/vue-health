import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // 路由懒加载
  {
    path: "/index",
    name: "Index",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/addweight",
    name: "Addweight",
    component: () => import("../views/Addweight.vue")
  },
  {
    path: "/customfood",
    name: "Customfood",
    component: () => import("../views/Customfood.vue")
  },
  {
    path: "/minecenter",
    name: "Minecneter",
    component: () => import("../views/Minecenter.vue")
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
