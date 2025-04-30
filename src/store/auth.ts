import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginApi, registerApi } from '@/api/auth'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const isAuthenticated = computed(() => !!token.value)

  async function login (email: string, password: string) {
    const { access_token } = await loginApi(email, password)
    token.value = access_token
    localStorage.setItem('token', access_token)
  }

  async function register (e: string, p: string) {
    await registerApi(e, p)
    await login(e, p)
  }

  function logout () {
    token.value = null
    localStorage.removeItem('token')
  }

  return { token, isAuthenticated, login, register, logout }
})
