<template>
  <div class="relative min-h-screen bg-white p-6">
    <!-- Ícono de usuario -->
    <div class="absolute top-4 right-4">
      <button @click="modalOpen = true" class="text-gray-600 hover:text-gray-800">
        <UserIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- CONTENIDO PRINCIPAL -->
    <div class="space-y-6 mt-12">
      <!-- Paso 1: Seleccionar carrera -->
      <div>
        <label for="carrera" class="block text-sm font-medium text-gray-700">Selecciona una carrera:</label>
        <select
          v-model="selectedCarrera"
          id="carrera"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500"
        >
          <option disabled value="">-- Elige una carrera --</option>
          <option v-for="carrera in carreras" :key="carrera" :value="carrera">{{ carrera }}</option>
        </select>
      </div>

      <div v-if="selectedCarrera">
        <button
          @click="step = 2"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Siguiente
        </button>
      </div>

      <!-- Paso 2: Seleccionar semestre -->
      <div v-if="step >= 2">
        <label for="semestre" class="block text-sm font-medium text-gray-700 mt-4">Selecciona el semestre:</label>
        <select
          v-model="selectedSemestre"
          id="semestre"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500"
        >
          <option disabled value="">-- Elige un semestre --</option>
          <option v-for="n in 10" :key="n" :value="`Semestre ${n}`">Semestre {{ n }}</option>
        </select>
      </div>

      <div v-if="selectedSemestre">
        <button
          @click="step = 3"
          class="mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Continuar
        </button>
      </div>

      <!-- Paso 3: Mostrar carrera, semestre y materia -->
      <div v-if="step >= 3">
        <div class="bg-gray-100 p-4 rounded-md shadow">
          <p><strong>Carrera:</strong> {{ selectedCarrera }}</p>
          <p><strong>Semestre:</strong> {{ selectedSemestre }}</p>

          <div class="mt-4">
            <label for="materia" class="block text-sm font-medium text-gray-700">Selecciona materia:</label>
            <select
              v-model="selectedMateria"
              id="materia"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500"
            >
              <option disabled value="">-- Elige una materia --</option>
              <option v-for="materia in materias" :key="materia" :value="materia">{{ materia }}</option>
            </select>
          </div>
        </div>

        <div v-if="selectedMateria" class="mt-4">
          <button
            @click="generarEvaluacion"
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Generar Evaluación
          </button>
        </div>
      </div>
    </div>

    <!-- MODAL DE USUARIO -->
    <ModalUsuario
      :visible="modalOpen"
      :correo="correo"
      :nuevaContrasena="nuevaContrasena"
      @cerrar="modalOpen = false"
      @abrir-historial="historialModalOpen = true"
    />

    <!-- MODAL DE HISTORIAL -->
    <ModalHistorial
      :visible="historialModalOpen"
      :carrera="selectedCarrera"
      :semestre="selectedSemestre"
      :materia="selectedMateria"
      @cerrar="historialModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserIcon } from '@heroicons/vue/24/solid'
import ModalUsuario from '../modals/ModalUsuario.vue'
import ModalHistorial from '../modals/ModalHistorial.vue'

const step = ref(1)
const carreras = ref(['Ingeniería de Sistemas', 'Administración de Empresas', 'Derecho'])
const materias = ref(['Matemáticas', 'Física', 'Programación', 'Contabilidad'])

const selectedCarrera = ref('')
const selectedSemestre = ref('')
const selectedMateria = ref('')

// Modales
const modalOpen = ref(false)
const historialModalOpen = ref(false)

// Usuario
const correo = ref('')
const nuevaContrasena = ref('')

// Instancia del router
const router = useRouter()

const generarEvaluacion = () => {
  // Redirigir a la vista de cuestionario
  router.push({ name: 'cuestionario' }) // Asegúrate de tener esta ruta configurada en tu router
}
</script>

<style scoped>
/* Estilos para el componente */
</style>
