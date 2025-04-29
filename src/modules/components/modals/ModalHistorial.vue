<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-xl font-semibold mb-4">Historial de Selección</h2>
      <p><strong>Carrera:</strong> {{ carrera }}</p>
      <p><strong>Semestre:</strong> {{ semestre }}</p>
      <p><strong>Materia:</strong> {{ materia }}</p>

      <div class="flex justify-end space-x-2 mt-4">
        <button
          type="button"
          @click="$emit('cerrar')"
          class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  visible: Boolean,
  carrera: String,
  semestre: String,
  materia: String
})
const emit = defineEmits(['cerrar'])
</script>
