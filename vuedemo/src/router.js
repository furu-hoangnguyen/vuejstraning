import Vue from 'vue'
import VueRouter from 'vue-router'
import cookie from 'vue-cookie';

import LoginPage from './view/LoginPage.vue'
import HomePage from './view/Home/HomePage.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', name: '/', redirect: '/home' },
        { path: '/home', name: 'home', component: HomePage },
        { path: '/login', name: 'login', component: LoginPage }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {
        if (cookie.get("dataUser") && cookie.get("token")) {
            next()
        } else {
            next('login')
        }
    } else {
        next()
    }
})
export default router