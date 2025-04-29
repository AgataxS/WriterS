import { createRouter, createWebHistory } from 'vue-router'
import CuestionarioView from '@/Modules/components/Views/CuestionarioView.vue' // Verifica que la ruta sea correcta

const routes = [
  {
    path: '/cuestionario',
    name: 'cuestionario', // Nombre de la ruta
    component: CuestionarioView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
