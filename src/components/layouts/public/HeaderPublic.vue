<template>
    <header>
        <div class="tientv-public-header">
            <div class="tientv-socials">
                Liên hệ: <a href="https://www.facebook.com/ttzjxe/"><v-icon icon="mdi-facebook" /></a>
            </div>
            <p>
                Chào mừng bạn đã ghé thăm cửa hàng TIENTV SHOP
            </p>
            <nav class="tientv-navbar1-container">
                <v-dialog width="auto" scrollable>
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn style="text-transform: none;" color="#0056d6" prepend-icon="mdi-earth" text="Ngôn ngữ"
                            variant="text" v-bind="activatorProps"></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card prepend-icon="mdi-earth" title="Ngôn ngữ">
                            <v-divider class="mt-3"></v-divider>
                            <v-card-text class="px-4" style=" width: 300px;">
                                <v-radio-group v-model="dialog">
                                    <v-radio color="#0056d6" label="Tiếng anh" value="EN"></v-radio>
                                    <v-radio color="#0056d6" label="Tiếng việt" value="VN"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn style="text-transform: none;" color="#0056d6" text="Đóng"
                                    @click="isActive.value = false">
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn style="text-transform: none;" color="#0056d6" text="Chọn" variant="flat"
                                    @click="isActive.value = false">
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </nav>
            <nav class="tientv-navbar2-container">
                <!--* TODO: AREA ĐĂNG NHẬP BẮT ĐẦU -->
                <v-btn v-if="!authStore.user" :to="{ path: '/login' }" color="#0056d6" style="text-transform: none;" prepend-icon="mdi-login"
                    variant="outlined">
                    Đăng nhập
                </v-btn>
                <div v-else class="user-info">
                    <span>Xin chào, {{ authStore.user.role }}</span>
                    <v-btn color="#0056d6" style="text-transform: none;" variant="text" @click="logout">
                        Đăng xuất
                    </v-btn>
                </div>
                <!--* TODO: AREA ĐĂNG NHẬP KẾT THÚC-->
            </nav>
        </div>

        <nav class="header-searchs">
            <div class="search-item"><span class="logo">TIENTV SHOP</span></div>
            <div class="search-item">
                <form action="">
                    <input type="search" placeholder="Tìm kiếm..." class="search-input">
                </form>
            </div>
            <div class="search-item">
                <!--TODO: GIỎ HÀNG BẮT ĐẦU -->
                <v-btn color="#0056d6" style="text-transform: none;" prepend-icon="mdi-cart" variant="outlined">
                    Giỏ hàng (1)
                </v-btn>
                <!--TODO: GIỎ HÀNG KẾT THÚC -->
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';

const dialog = ref('');
const authStore = useAuthStore();
const router = useRouter();


const user = computed(() => authStore.user);

const logout = async () => {
    await authStore.logout();
};

onMounted(() => {
    authStore.fetchUser();
});

</script>
