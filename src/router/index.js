import { createRouter, createWebHashHistory } from "vue-router";  // ← ИЗМЕНЕНО
import LandingPage from "../views/LandingPage.vue";
import AdminPanel from '../views/AdminPanel.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPanel
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),  
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;