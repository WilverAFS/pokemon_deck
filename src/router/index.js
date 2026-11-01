import { createRouter, createWebHistory } from 'vue-router'
import PokemonDeck from '@/components/PokemonDeck.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonDeck,
    },
  ],
})

export default router
