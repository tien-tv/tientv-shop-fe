<template>
    <Header />
    <main class="public-layout">
        <RouterView />
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/layouts/public/HeaderPublic.vue';
import Footer from '@/components/layouts/public/FooterPublic.vue';

export default {
    components: { Header, Footer }
}
</script>