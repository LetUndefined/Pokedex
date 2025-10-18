import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MainLayout from '@/layouts/MainLayout.vue';

import PokemonViewDetails from '@/views/PokemonViewDetails.vue';
import FavoriteView from '@/views/FavoriteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/pokemon/:name',
          name: 'pokemon-details',
          component: PokemonViewDetails,
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: FavoriteView,
        },
      ],
    },
  ],
});

export default router;
