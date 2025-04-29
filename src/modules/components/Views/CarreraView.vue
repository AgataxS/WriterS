<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div class="w-full max-w-xl bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-xl font-bold text-center text-indigo-600 mb-6">Selecciona tu carrera</h2>
        <CarreraForm />
      </div>
    </div>
  </template>
  
  <script setup>
  import CarreraForm from '../components/CarreraForm.vue'
  </script>
  