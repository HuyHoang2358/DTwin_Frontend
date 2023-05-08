import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginForm from "../views/admin/contents/auth/LoginForm.vue";
import DashBoard from "@/views/admin/contents/homepage/DashBoard";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/login",
    name: "admin.login",
    component: LoginForm,
  },
  {
    path: "/admin/",
    name: "admin.index",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
