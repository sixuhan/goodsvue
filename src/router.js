import vue from 'vue'
import router from 'vue-router'

vue.use(router)

export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/layout'),
            children: [
                {
                    redirect: 'home',
                    path: '/'
                },
                {
                    path: 'home',
                    component: () => import('@/pages/home.vue')
                },
                {
                    path: 'page1',
                    component: () => import('@/pages/page1.vue')
                },
                {
                    path: 'login',
                    component: () => import('@/pages/login.vue')
                },
                {
                    path: 'classify',
                    component: () => import('@/pages/classify.vue')
                },
                {
                    path: 'my',
                    component: () => import('@/pages/my.vue')
                },
                {
                    path: 'buy',
                    component: () => import('@/pages/buy.vue')
                }
            ]
        }
    ]
})