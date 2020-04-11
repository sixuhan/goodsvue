import vue from 'vue'
import router from 'vue-router'

vue.use(router)

export default new router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home.vue')
        },
        {
            path: '/page1',
            component: () => import('@/pages/page1.vue')
        }
    ]
})