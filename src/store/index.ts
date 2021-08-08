import { createStore } from 'vuex'
import router from "./router"
export default createStore({
  state: {
  },
  mutations: {
    upatedd(state, flag) {
      console.log(state, flag)
    }
  },
  actions: {
  },
  modules: {
    router
  }
})
