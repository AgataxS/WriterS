<template>
    <div>
      <h2 class="text-xl font-semibold mb-5">Sesiones</h2>
  
      <div class="flex items-center gap-3 mb-6">
        <BaseButton @click="openNew = true">Nueva sesión</BaseButton>
        <span v-if="loading" class="text-sm text-gray-500">Cargando…</span>
      </div>
  
      <div v-if="sessions.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="s in sessions"
          :key="s.id"
          class="p-5 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col"
        >
          <h3 class="font-bold">Sesión #{{ s.id }}</h3>
          <p class="text-xs text-gray-500 mb-4">
            {{ s.document.title }}<br />
            {{ s.start_time.slice(0, 10) }}
          </p>
          <RouterLink
            :to="`/sessions/${s.id}/questions`"
            class="text-blue-600 text-sm mt-auto hover:underline"
          >
            Ver / generar preguntas →
          </RouterLink>
        </div>
      </div>
      <p v-else class="text-gray-500">Todavía no creaste sesiones.</p>
  
      <!-- MODAL -->
      <div
        v-if="openNew"
        class="fixed inset-0 bg-black/40 grid place-items-center px-4"
      >
        <div class="bg-white w-full max-w-md rounded-xl p-6">
          <h3 class="font-semibold mb-4">Nueva sesión</h3>
  
          <label class="block text-sm text-gray-600 mb-1">Documento</label>
          <select v-model="selectedDoc" class="w-full border rounded p-2">
            <option value="" disabled>Elige…</option>
            <option v-for="d in documents" :key="d.id" :value="d.id">
              {{ d.title }}
            </option>
          </select>
  
          <div class="flex justify-end gap-2 mt-6">
            <BaseButton class="bg-gray-500" @click="openNew = false">
              Cancelar
            </BaseButton>
            <BaseButton :disabled="!selectedDoc" @click="save">
              Crear
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { listSessions, createSession } from '@/api/sessions'
  import { listDocuments } from '@/api/documents'
  import BaseButton from '@/components/BaseButton.vue'
  
  const sessions   = ref<any[]>([])
  const documents  = ref<any[]>([])
  const loading    = ref(false)
  
  const openNew    = ref(false)
  const selectedDoc= ref<number | ''>('')
  
  const load = async () => {
    loading.value = true
    sessions.value = await listSessions()
    loading.value = false
  }
  const loadDocs = () => listDocuments().then(r => (documents.value = r))
  
  async function save () {
  await createSession(Number(selectedDoc.value))   
  openNew.value = false
  selectedDoc.value = ''
  load()
}
  
  onMounted(() => { load(); loadDocs() })
  </script>
  