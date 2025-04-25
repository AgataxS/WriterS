<!-- src/components/LoginForm.vue -->
<template>
    <div>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Campo de Correo Electrónico -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
  
        <!-- Campo de Contraseña -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Ingrese su contraseña"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
  
        <!-- Botón de Enviar -->
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Definimos las variables para el correo y la contraseña
  const email = ref('');
  const password = ref('');
  
  // Función que maneja el envío del formulario
  const handleSubmit = () => {
    // Aquí puedes hacer la validación del formulario o hacer una llamada a tu API para autenticar al usuario
    console.log('Correo:', email.value);
    console.log('Contraseña:', password.value);
  
    // Lógica de autenticación
    // Por ejemplo, enviar los datos al backend para verificar las credenciales.
  };
  </script>
  
  <style scoped>
  /* Agregar estilos específicos si es necesario */
  </style>
  