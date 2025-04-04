<template>
    <div class="tientv-private-header">
        <div class="user-profile">
            <div class="user-profile__item">
                <img :src="user?.picture" alt="">
                <p>Họ và tên: <span>{{ user?.name }}</span> </p>
                <p>Vai trò:
                    <span v-if="user?.role">
                        Admin
                    </span>
                </p>
            </div>
            <div style="max-height: 100%; overflow-y: auto;">
                <div class="user-profile__item">
                    <v-list v-model:opened="open" density="compact" :style="{ fontSize: '13px', color: '#0056d6' }">
                        <v-list-group v-model="usersOpen" :sub-group="false">
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" density="compact" prepend-icon="mdi-view-dashboard"
                                    title="Trang chủ" :style="{ color: '#0056d6' }" />
                            </template>

                            <div class="d-flex flex-column ga-2 px-4 py-2">
                                <v-btn :to="{ path: '/products' }" color="#0056d6" variant="outlined"
                                    prepend-icon="mdi-package-variant"
                                    style="text-transform: none; font-size: 13px; border-radius: 0;">
                                    Quản lý sản phẩm
                                </v-btn>
                                <v-btn color="#0056d6" variant="outlined"
                                    prepend-icon="mdi-account"
                                    style="text-transform: none; font-size: 13px; border-radius: 0;">
                                    Quản lý người dùng
                                </v-btn>
                            </div>
                        </v-list-group>
                    </v-list>
                </div>
                <div class="user-profile__item">
                </div>
                <div class="user-profile__item">

                </div>
            </div>

            <div class="user-profile__item logout">
                <v-btn color="red" style="text-transform: none; border-radius: 0;" prepend-icon="mdi-logout"
                    variant="outlined">
                    Đăng xuất
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        user.value = JSON.parse(storedUser);
    }
});

const open = ref(['Users'])
const usersOpen = ref(true)
</script>