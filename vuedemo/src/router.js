import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './view/LoginPage.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', name: '/', redirect: '/login' },
        { path: '/login', name: 'login', component: LoginPage }
    ]
})
export default router