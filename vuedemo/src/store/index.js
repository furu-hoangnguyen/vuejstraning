import Vue from 'vue'
import Vuex from 'vuex'
import LoginModule from './modules/LoginModule'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        lockScreen: false
    },
    actions: {
        act_lockScreen({ commit }) {
            commit("mut_setLockScreen", true)
        },
        act_unlockScreen({ commit }) {
            commit("mut_setLockScreen", false)
        }
    },
    mutations: {
        mut_setLockScreen(state, payload) {
            state.lockScreen = payload
        }
    },
    modules: {
        LoginModule
    }
})
export default store