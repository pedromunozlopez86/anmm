import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView,
    },
    {
      path: '/programa',
      name: 'Programa',
      component: () => import('@/views/Programa.vue'),
    },
    {
      path: '/informaciones',
      name: 'Informaciones',
      component: () => import('@/views/Informaciones.vue'),
    },
    {
      path: '/comisiones',
      name: 'Comisiones',
      component: () => import('@/views/Comisiones.vue'),
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: () => import('@/views/Contacto.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/Error404.vue'),
    },
  ],
})

export default router
