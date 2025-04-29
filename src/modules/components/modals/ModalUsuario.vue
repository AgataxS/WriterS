<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-xl font-semibold mb-4">Configuración de Usuario</h2>

      <form class="space-y-4" @submit.prevent="guardarCambios">
        <div>
          <label class="block text-sm font-medium text-gray-700">Correo:</label>
          <input type="email" v-model="correoLocal" class="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Nueva Contraseña:</label>
          <input type="password" v-model="nuevaContrasenaLocal" class="w-full p-2 border rounded-md" />
        </div>

        <div class="flex items-center space-x-2">
          <button
            type="button"
            @click="$emit('abrir-historial')"
            class="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          >
            Ver Historial
          </button>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            type="submit"
            class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Guardar
          </button>
          <button
            type="button"
            @click="$emit('cerrar')"
            class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  visible: Boolean,
  correo: String,
  nuevaContrasena: String,
})

const emit = defineEmits(['cerrar', 'abrir-historial'])

const correoLocal = ref(props.correo || '')
const nuevaContrasenaLocal = ref(props.nuevaContrasena || '')

// Emitimos datos al guardar
function guardarCambios() {
  alert(`Cambios guardados:\nCorreo: ${correoLocal.value}\nContraseña: ${nuevaContrasenaLocal.value}`)
  emit('cerrar')
}
</script>
