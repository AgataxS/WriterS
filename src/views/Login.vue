<template>
    <AuthLayout>
      <div class="max-w-xs mx-auto p-6 bg-white rounded shadow">
        <h1 class="text-xl font-semibold mb-4 text-center">Iniciar Sesión</h1>
        <form @submit.prevent="submit">
          <BaseInput v-model="email" placeholder="Correo" type="email" />
          <BaseInput v-model="password" placeholder="Contraseña" type="password" class="mt-2" />
          <BaseButton class="w-full mt-4">Entrar</BaseButton>
        </form>
        <p class="text-sm text-center mt-3">
          ¿No tienes cuenta?
          <RouterLink to="/register" class="text-blue-600 hover:underline">Regístrate</RouterLink>
        </p>
      </div>
    </AuthLayout>
  </template>
  <script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useAuthStore } from "../store/auth";
  import BaseInput from "../components/BaseInput.vue";
  import BaseButton from "../components/BaseButton.vue";
  import AuthLayout from "../layouts/AuthLayout.vue";
  
  const email = ref("");
  const password = ref("");
  const router = useRouter();
  const store = useAuthStore();
  
  async function submit() {
    try {
      await store.login(email.value, password.value);
      router.push("/");
    } catch {
      alert("Credenciales incorrectas");
    }
  }
  </script>