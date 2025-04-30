<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Carreras</h2>
      <!-- listado → simplificado -->
      <div class="bg-white p-4 rounded shadow">
        <div class="flex justify-between mb-2">
          <BaseInput v-model="search" placeholder="Buscar…" class="flex-1 mr-2" />
          <BaseButton @click="openModal">Nueva Carrera</BaseButton>
        </div>
        <table class="w-full text-left">
          <thead><tr><th>Nombre</th><th>Descripción</th><th></th></tr></thead>
          <tbody>
            <tr v-for="c in filtered" :key="c.id" class="border-t">
              <td>{{ c.name }}</td><td>{{ c.description }}</td>
              <td><BaseButton @click="edit(c)" class="bg-green-600">✎</BaseButton></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, computed } from "vue";
  import BaseButton from "../components/BaseButton.vue";
  import BaseInput  from "../components/BaseInput.vue";
  
  interface Career { id:number; name:string; description:string }
  const careers = ref<Career[]>([]); // fetch api here
  const search  = ref("");
  const filtered = computed(() => careers.value.filter(c => c.name.toLowerCase().includes(search.value.toLowerCase())));
  const openModal = () => {/* TODO */};
  const edit = (c:Career) => {/* TODO */};
  </script>