<template>
    <div class="admin-layout">
        <Header />
        <main class="private-layout">
            <div class="main-scrollable">
                <RouterView />
            </div>
        </main>
    </div>
</template>

<script>
import Header from '@/components/layouts/privates/HeaderPrivate.vue';

export default {
    components: { Header }
}
</script>