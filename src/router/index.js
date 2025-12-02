import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AdminPanel from '../views/AdminPanel.vue'

// const Products = () => import("@/views/Products.vue");

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
  // { 
  //   path: "/products", 
  //   name: "products", 
  //   component: Products 
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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