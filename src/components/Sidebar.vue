<template>
    <aside class="w-60 bg-gray-50 border-r flex flex-col">
      <h1 class="h-16 flex items-center justify-center font-black text-lg border-b">
        ⚙️ Admin
      </h1>
  
      <nav class="flex-1 px-4 py-6 space-y-1 text-sm">
        <RouterLink
          v-for="i in items"
          :key="i.to"
          :to="i.to"
          class="block px-3 py-2 rounded-md"
          :class="route.path.startsWith(i.to)
            ? 'bg-blue-100 text-blue-700'
            : 'hover:bg-gray-100'"
        >
          {{ i.label }}
        </RouterLink>
      </nav>
  
      <button
        class="m-4 px-3 py-2 rounded text-red-600 hover:bg-red-50"
        @click="logout"
      >
        Cerrar sesión
      </button>
    </aside>
  </template>
  
  <script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { useAuthStore } from '@/store/auth'
  
  const items = [
    { label: 'Panel',      to: '/' },
    { label: 'Documentos', to: '/documents' },
    { label: 'Sesiones',   to: '/sessions' },
  ]
  
  const route  = useRoute()
  const router = useRouter()
  const store  = useAuthStore()
  
  const logout = () => {
    store.logout()
    router.push('/login')
  }
  </script>
  