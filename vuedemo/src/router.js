import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './view/LoginPage.vue'
import HomePage from './view/HomePage.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', name: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: HomePage },
        { path: '/login', name: 'login', component: LoginPage }
    ]
})
export default router