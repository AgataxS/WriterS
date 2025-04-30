
<template>
    <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col">
      <h3 class="font-semibold text-lg mb-1">{{ doc.title }}</h3>
      <p class="text-xs text-gray-500 mb-4">{{ doc.subject }} · {{ doc.semester }}</p>
      <RouterLink
        :to="`/sessions?doc=${doc.id}`"
        class="mt-auto text-blue-600 text-sm hover:underline"
      >
        Crear sesión →
      </RouterLink>
    </div>
  </template>
  <script setup lang="ts">
  defineProps<{ doc: any }>()
  </script>
  