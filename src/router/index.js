import { createRouter, createWebHistory } from 'vue-router'

import Formation from '@/views/public/Formation.vue'
import Texts from "@/views/public/Texts.vue";

const routes = [
  {
    path: "/formation",
    name: "formation",
    component: Formation,
  },
  {
    path: "/texts",
    name: "texts",
    component: Texts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
