/**
 * 路由跳转相关的数据
 */
interface stateObject {
    homeFlag: boolean
}
export default {
    namespace: true,
    state: {
        homeFlag: false
    },
    getters: {
        getHomeFlag(state: stateObject): boolean { return state.homeFlag }
    },
    mutations: {
        updateHomeFlag(state: stateObject, flag: boolean): void {
            state.homeFlag = flag
        }
    }
}