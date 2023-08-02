import { createRouter, createWebHistory } from "vue-router";
/*import store from "../store";*/
import HomeView from "../views/HomeView.vue";
import DashBoard from "@/views/admin/contents/homepage/DashBoard";
import MenuIndex from "@/views/admin/contents/menu/MenuIndex";
import MenuAddForm from "@/views/admin/contents/menu/MenuAddForm";
import MenuEditForm from "@/views/admin/contents/menu/MenuEditForm";
import RoleAddForm from "@/views/admin/contents/role/RoleAddForm";
import RightPage from "@/views/admin/contents/right/RightPage.vue";
import RoleEditForm from "@/views/admin/contents/role/RoleEditForm";
import ListUserInRole from "@/views/admin/contents/role/ListUserInRole";
import HomePage from "@/views/front/contents/homepage/HomePage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import UserPage from "@/views/admin/contents/user/UserPage.vue";
import RolePage from "@/views/admin/contents/role/RolePage.vue";

const routes = [
  //home
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/",
    name: "admin.index",
    component: DashBoard,
    /*meta: { requiresAuth: true },*/
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
    component: MenuIndex,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/menu/add",
    name: "admin.menu.add",
    component: MenuAddForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/menu/edit/:menuId",
    name: "admin.menu.edit",
    component: MenuEditForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/menu/edit/:menuId",
    name: "admin.menu.edit",
    component: MenuEditForm,
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
    path: "/admin/role/add",
    name: "admin.role.add",
    component: RoleAddForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/role/edit/:roleId",
    name: "admin.role.edit",
    component: RoleEditForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/admin/role/list-user/:roleId",
    name: "admin.role.list_users",
    component: ListUserInRole,
    meta: { requiresAuth: true },
  },
  {
    path: "/homepage",
    name: "homepage",
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/auth/login",
    name: "auth.login",
    component: LoginPage,
    meta: { guest: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isLoggedIn = store.getters["AUTH/isLoggedIn"];
  /!*console.log(
    `route info || requiresAuth- ${requiresAuth}; isLoggedIn: ${isLoggedIn}`
  );*!/
  if (requiresAuth && !isLoggedIn) {
    next({ name: "auth.login" });
  } else {
    next();
  }
});*/

export default router;
