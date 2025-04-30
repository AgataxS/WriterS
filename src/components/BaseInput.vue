<template>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-200"
    />
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{ modelValue: string | number | null }>()
  const emit  = defineEmits<{
    (e: 'update:modelValue', v: string | number | null): void
  }>()
  </script>
  