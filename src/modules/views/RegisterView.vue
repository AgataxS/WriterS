<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold text-center text-indigo-600 mb-6">Crear Cuenta</h1>
        <RegisterForm />
      </div>
    </div>
  </template>
  
  <script setup>
  import RegisterForm from '../components/RegisterForm.vue'
  </script>
  