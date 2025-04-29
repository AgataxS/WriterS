<!-- src/views/LoginView.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h1>
        <LoginForm />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import LoginForm from '../forms/LoginForm.vue'
  </script>
  
  <style scoped>
  /* Estilos opcionales para la vista de login */
  </style>
  