import { createRouter, createWebHistory } from 'vue-router';
import GameView from "@/views/GameView.vue";
import SettingView from "@/views/SettingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'setting',
      component: SettingView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    }
  ]
})

export default router
