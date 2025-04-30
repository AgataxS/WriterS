<template>
    <div>
      <h2 class="text-xl font-semibold mb-5">Preguntas · Sesión {{ id }}</h2>
  
      <BaseButton @click="generate" class="mb-4">Generar 5 preguntas</BaseButton>
      <span v-if="loading" class="ml-2 text-sm text-gray-500">generando…</span>
  
      <ul v-if="questions.length" class="space-y-4">
        <li
          v-for="q in questions"
          :key="q.id"
          class="p-4 bg-white rounded-xl shadow"
        >
          <p class="font-medium">{{ q.prompt }}</p>
          <RouterLink
            :to="`/evaluation/${q.id}`"
            class="text-blue-600 text-sm hover:underline inline-block mt-2"
          >
            Responder →
          </RouterLink>
        </li>
      </ul>
      <p v-else class="text-gray-500">Aún no hay preguntas.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { getSessionQuestions, generateQuestions } from '@/api/sessions'
  import BaseButton from '@/components/BaseButton.vue'
  
  const id         = Number(useRoute().params.id)
  const questions  = ref<any[]>([])
  const loading    = ref(false)
  
  const load = () => getSessionQuestions(id).then(q => (questions.value = q))
  
  async function generate () {
    loading.value = true
    try {
      await generateQuestions(id)
      await load()
    } finally {
      loading.value = false
    }
  }
  
  onMounted(load)
  </script>
  