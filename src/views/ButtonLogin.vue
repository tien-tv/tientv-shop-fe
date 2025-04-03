<template>
    <button @click="auth.login()" v-if="!auth.user">
        Login with Google
    </button>
    <div v-else>
        <p>Welcome, {{ auth.user.name }}!</p>
        <button @click="auth.logout()">Logout</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth'
const auth = useAuthStore()
</script>