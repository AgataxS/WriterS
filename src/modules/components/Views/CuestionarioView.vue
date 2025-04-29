<template>
    <div class="relative min-h-screen p-6">
      <h1 class="text-xl font-bold">Cuestionario</h1>
  
      <!-- Información del cuestionario -->
      <div class="mt-6">
        <p><strong>Carrera:</strong> {{ carrera }}</p>
        <p><strong>Semestre:</strong> {{ semestre }}</p>
        <p><strong>Materia:</strong> {{ materia }}</p>
      </div>
  
      <!-- Cargar el cuestionario o documento -->
      <div v-if="isLoading" class="mt-6">
        <p>Cargando el cuestionario...</p>
        <!-- Puedes mostrar un spinner de carga aquí -->
      </div>
  
      <div v-else>
        <div>
          <h2 class="font-semibold">Cuestionario</h2>
          <p>Instrucciones o contenido del cuestionario aquí...</p>
          <!-- Agrega un formulario o los elementos necesarios para completar el cuestionario -->
        </div>
  
        <!-- Ejemplo de formulario -->
        <form @submit.prevent="enviarCuestionario">
          <label for="respuesta">Pregunta 1:</label>
          <input type="text" id="respuesta" v-model="respuesta1" class="mt-2 p-2 border" />
          <button type="submit" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Enviar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  // Variables que recibimos de la ruta
  const carrera = ref('')
  const semestre = ref('')
  const materia = ref('')
  
  // Variables para el cuestionario
  const isLoading = ref(true)
  const respuesta1 = ref('')
  
  // Cargar los datos del cuestionario
  onMounted(() => {
    carrera.value = route.query.carrera as string
    semestre.value = route.query.semestre as string
    materia.value = route.query.materia as string
  
    // Simulación de carga del cuestionario (puedes reemplazarlo por la lógica real)
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  })
  
  // Enviar el cuestionario
  const enviarCuestionario = () => {
    console.log('Respuestas enviadas:', respuesta1.value)
    alert('Cuestionario enviado!')
  }
  </script>
  