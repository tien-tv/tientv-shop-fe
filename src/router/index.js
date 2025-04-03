import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/', component: () => import('../layouts/PublicLayout.vue'), meta: { title: 'Trang chủ - tientv' },
        children: [
            { path: '/', component: () => import('../views/publics/HomeView.vue') }
        ]
    },
    { path: '/admin', component: () => import('../views/privates/AdminView.vue') },
    {
        path: '/login', component: () => import('../views/Login.vue'), meta: { title: 'Đăng nhập - tientv' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => {
    document.title = to.meta.title
})

export default router