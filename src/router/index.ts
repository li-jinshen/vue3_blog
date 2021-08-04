import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/blog/home"
  },
  {
    path: '/blog/home',
    name: 'Home',
    component: Home,
    redirect: "/blog/home/article",
    children: [

      {
        path: "article",
        name: "Article",
        component: () => import('../views/home/pages/Article.vue')
      },
      {
        path: "music",
        name: "Music",
        component: () => import('../views/home/pages/Music.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
