import { createRouter, createWebHistory } from 'vue-router'
import ProductoView from '@/views/ProductoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'producto',
      component: ProductoView,
    }
  ],
})

export default router
