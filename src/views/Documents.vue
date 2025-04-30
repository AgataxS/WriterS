<template>
    <div>
      <h2 class="text-xl font-semibold mb-4">Documentos</h2>
      <BaseButton @click="show=true" class="mb-3">Nuevo documento</BaseButton>
      <div class="grid md:grid-cols-3 gap-4"><DocCard v-for="d in docs" :key="d.id" :doc="d" /></div>
      <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="bg-white p-6 rounded w-96">
          <h3 class="font-semibold mb-2">Crear documento</h3>
          <BaseInput v-model="form.title"     placeholder="Título" />
          <BaseInput v-model="form.subject"   placeholder="Materia" class="mt-2" />
          <BaseInput v-model="form.semester"  placeholder="Semestre" class="mt-2" />
          <BaseInput v-model="form.api_endpoint" placeholder="API endpoint" class="mt-2" />
          <div class="flex justify-end mt-4 space-x-2">
            <BaseButton @click="show=false" class="bg-gray-500">Cancelar</BaseButton>
            <BaseButton @click="save">Guardar</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref,onMounted } from "vue";
  import { listDocuments, createDocument } from "../api/documents";
  import BaseButton from "../components/BaseButton.vue";
  import BaseInput from "../components/BaseInput.vue";
  import DocCard from "../components/DocCard.vue";
  const docs=ref<any[]>([]); const show=ref(false);
  const form=ref({title:"",subject:"",semester:"", api_endpoint: "",});
  const load=()=> listDocuments().then((d)=>docs.value=d);
  async function save() {
  await createDocument(form.value);   
  show.value = false;
  Object.assign(form.value, { title: "", subject: "", semester: "", api_endpoint: "" });
  load();
}
  </script>