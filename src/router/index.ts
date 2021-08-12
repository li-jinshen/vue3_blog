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
        path: "front",
        name: "Front",
        component: () => import('../views/home/pages/Front.vue'),
        meta: {
          pageIndex: 4,
        }
      },
      {
        path: "browser",
        name: "Browser",
        component: () => import('../views/home/pages/Browser.vue'),
        meta: {
          pageIndex: 5,
        }
      },
      {
        path: "tool",
        name: "Tool",
        component: () => import('../views/home/pages/Tool.vue'),
        meta: {
          pageIndex: 6,
        }
      },
      {
        path: "resources",
        name: "Resources",
        component: () => import('../views/home/pages/Resources.vue'),
        meta: {
          pageIndex: 7,
        }
      },
      {
        path: "navigation",
        name: "Navigation",
        component: () => import('../views/home/pages/Navigation.vue'),
        meta: {
          pageIndex: 8,
        }
      },
      {
        path: "search",
        name: "Search",
        component: () => import('../views/home/pages/Search.vue'),
        meta: {
          pageIndex: 9,
        }
      },
      {
        path: "link",
        name: "Link",
        component: () => import('../views/home/pages/Link.vue'),
        meta: {
          pageIndex: 9,
        }
      },

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
