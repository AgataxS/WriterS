<!-- src/App.vue -->
<template>
  <!-- <LoginView /> -->
   <!-- <RegisterForm/> -->
    <CarreraForm/>
    <CuestionarioView />
    <router-view />
</template>

<script setup lang="ts">
import CarreraForm from './Modules/components/forms/CarreraForm.vue';
import RegisterForm from './Modules/components/forms/RegisterForm.vue';
import LoginView from './Modules/components/Views/LoginView.vue'
import CuestionarioView from './Modules/components/Views/CuestionarioView.vue';
</script>

<style>
/* Agregar estilos generales si es necesario */
</style>
