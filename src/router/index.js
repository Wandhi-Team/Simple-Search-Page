import Home from '../views/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/nav',
        name: 'nav',
        component: () => import('../views/nav.vue')
    },
    {
        path: '/os',
        name: 'os',
        component: () => import('../views/os.vue')
    },
    {
        path: '/software',
        name: 'software',
        component: () => import('../views/software.vue')
    }
]

const routerHistory = createWebHistory(import.meta.env.BASE_URL)
const router = createRouter({
    history: routerHistory,
    routes,
})

export default router
