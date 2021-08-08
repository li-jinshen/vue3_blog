import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'
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
    meta: {
      pageIndex: 1
    },
    children: [
      {
        path: "article",
        name: "Article",
        component: () => import('../views/home/pages/Article.vue'),
        meta: {
          pageIndex: 2,
        }
      },
      {
        path: "music",
        name: "Music",
        component: () => import('../views/home/pages/Music.vue'),
        meta: {
          pageIndex: 3,
        }
      },
      {
        path: "browser",
        name: "Browser",
        component: () => import('../views/home/pages/Browser.vue'),
        meta: {
          pageIndex: 5,
        }
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  if (to.meta.pageIndex && from.meta.pageIndex) {
    <number>to.meta.pageIndex > <number>from.meta.pageIndex ? store.commit("updateHomeFlag", true) : store.commit("updateHomeFlag", false)
  }
  return true
})
export default router
