import {createRouter, createWebHistory} from 'vue-router'

import Welcome from '../views/Welcome'

const routes = [
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