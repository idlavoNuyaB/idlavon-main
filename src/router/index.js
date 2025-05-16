import { createRouter, createWebHistory } from 'vue-router';

import DefaultTheme from '@/views/v1/DefaultTheme.vue';
import NierTheme from '@/views/v2/NierTheme.vue';

const routes = [
  {
    path: '/',
    name: 'DefaultTheme',
    component: DefaultTheme,
  },
  {
    path: '/v2',
    name: 'NierTheme',
    component: NierTheme,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;