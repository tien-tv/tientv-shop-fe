import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes = [
    {
        path: '/',
        component: () => import('../layouts/PublicLayout.vue'),
        children: [
            { path: '/', name: 'Home', component: () => import('../views/publics/HomeView.vue'), meta: { title: 'Trang chủ - tientv' } }
        ]
    },
    {
        path: '/admin',
        component: () => import('../layouts/PrivateLayout.vue'),
        meta: { requiresAuth: true, requiresRole: 'ADMIN' },
        children: [
            {
                path: '/admin', component: () => import('../views/privates/AdminView.vue'),
                meta: { title: 'Trang quản trị - tientv', requiresAuth: true, requiresRole: 'ADMIN' }
            },
            {
                path: '/products', component: () => import('../views/privates/ProductView.vue'),
                meta: { title: 'Trang quản lý sản phẩm - tientv', requiresAuth: true, requiresRole: 'ADMIN' }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: { title: 'Đăng nhập - tientv' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('user') !== null;
    const userRole = isAuthenticated ? JSON.parse(localStorage.getItem('user')).role : null;

    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: 'Login' });
    }

    if (to.meta.requiresRole && to.meta.requiresRole !== userRole) {
        return next({ name: 'Home' });
    }

    next();
});


router.beforeEach((to) => {
    document.title = to.meta.title || 'TIENTV SHOP';
});

export default router;
