import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import DashBoard from "@/views/admin/contents/homepage/DashBoard";
import RightPage from "@/views/admin/contents/right/RightPage.vue";
import HomePage from "@/views/front/contents/homepage/HomePage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import UserPage from "@/views/admin/contents/user/UserPage.vue";
import RolePage from "@/views/admin/contents/role/RolePage.vue";
import MenuPage from "@/views/admin/contents/menu/MenuPage.vue";
import MapIndex from "@/views/map/MapIndex.vue";
import BuildingPage from "@/views/front/contents/map/BuildingPage.vue";

const routes = [
  //home
  {
    path: "/admin/",
    name: "admin.index",
    component: DashBoard,
    meta: { requiresAuth: true },
  },

  // admin.user
  {
    path: "/admin/user",
    name: "admin.user.index",
    component: UserPage,
    meta: { requiresAuth: true },
  },
  // admin.menu
  {
    path: "/admin/menu",
    name: "admin.menu.index",
    component: MenuPage,
    meta: { requiresAuth: true },
  },

  // admin.right
  {
    path: "/admin/right",
    name: "admin.right.index",
    component: RightPage,
    meta: { requiresAuth: true },
  },

  // admin.role
  {
    path: "/admin/role",
    name: "admin.role.index",
    component: RolePage,
    meta: { requiresAuth: true },
  },

  {
    path: "/",
    name: "homepage",
    component: HomePage,
    meta: { requiresAuth: false },
  },
  {
    path: "/auth/login",
    name: "auth.login",
    component: LoginPage,
    meta: { guest: true },
  },
  {
    path: "/map",
    name: "map",
    component: MapIndex,
    meta: { guest: true },
  },
  {
    path: "/map/building",
    name: "map.building",
    component: BuildingPage,
    meta: { guest: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isLoggedIn = store.getters["AUTH/isLoggedIn"];

  if (requiresAuth && !isLoggedIn) {
    next({ name: "auth.login" });
  } else {
    next();
  }
});

export default router;
