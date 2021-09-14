import {createRouter, createWebHistory} from 'vue-router'

import Welcome from '../views/Welcome'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router