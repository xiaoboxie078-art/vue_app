<template>
  <div>
    <h2>欢迎回来，{{ username }}</h2>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const username = localStorage.getItem('user') || '游客'

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>