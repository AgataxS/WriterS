<template>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre completo</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          v-model="form.password"
          type="password"
          id="password"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
  
      <div class="mb-6">
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
        <input
          v-model="form.confirmPassword"
          type="password"
          id="confirmPassword"
          class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
  
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Registrarse
      </button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  
  function register() {
    if (form.password !== form.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    // Aquí puedes hacer el submit a tu backend o mostrar los datos
    console.log('Registro exitoso', form)
  }
  </script>
  