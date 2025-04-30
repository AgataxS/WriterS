import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes = [
  { path: '/login',    component: () => import('@/views/Login.vue') },
  { path: '/register', component: () => import('@/views/Register.vue') },
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/Dashboard.vue') },
      { path: 'documents', component: () => import('@/views/Documents.vue') },
      { path: 'sessions',  component: () => import('@/views/Sessions.vue') },
      { path: 'sessions/:id/questions', component: () => import('@/views/Questions.vue') },
      { path: 'evaluation/:qid',        component: () => import('@/views/DoEvaluation.vue') },
    ],
  },
  { path: '/:catchAll(.*)', redirect: '/' },
]

const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to, _from, next) => {
  const auth = useAuthStore()
  const open = ['/login', '/register']
  if (!auth.isAuthenticated && !open.includes(to.path)) next('/login')
  else if (auth.isAuthenticated && open.includes(to.path)) next('/')
  else next()
})

export default router
