<template>
    <div class="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 class="text-xl font-semibold mb-4">Responder Pregunta</h2>
      <p class="mb-4">{{ question?.prompt }}</p>
  
      <textarea v-model="answer" rows="4" class="w-full border rounded p-2"></textarea>
      <BaseButton class="mt-3" @click="submit" :disabled="!answer">Enviar</BaseButton>
  
      <div v-if="result" class="mt-4 p-4 bg-gray-50 rounded">
        <p><strong>Score:</strong> {{ result.score }}</p>
        <p class="text-sm text-gray-600 mt-1">{{ result.feedback }}</p>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import axios from "axios";
  import { evaluateAnswer } from "../api/evaluations";
  import BaseButton from "../components/BaseButton.vue";
  
  const route = useRoute();
  const qid   = Number(route.params.qid);
  
  const question = ref<any>(null);
  const answer   = ref("");
  const result   = ref<any>(null);
  
  async function load() {
    const { data } = await axios.get(`/api/v1/questions/${qid}`, { baseURL: import.meta.env.VITE_API_BASE_URL });
    question.value = data;
  }
  
  async function submit() {
    result.value = await evaluateAnswer({ session_id: question.value.session_id, question_id: qid, answer_text: answer.value });
  }
  
  onMounted(load);
  </script>
  