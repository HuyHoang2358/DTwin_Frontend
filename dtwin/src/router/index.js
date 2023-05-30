import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginForm from "../views/admin/contents/auth/LoginForm.vue";
import DashBoard from "@/views/admin/contents/homepage/DashBoard";
import UserIndex from "@/views/admin/contents/user/UserIndex";
import UserAddForm from "@/views/admin/contents/user/UserAddForm";
import UserDetail from "@/views/admin/contents/user/UserDetail";
import UserEditForm from "@/views/admin/contents/user/UserEditForm";
import MenuIndex from "@/views/admin/contents/menu/MenuIndex";
import MenuAddForm from "@/views/admin/contents/menu/MenuAddForm";
import MenuEditForm from "@/views/admin/contents/menu/MenuEditForm";
import RoleAddForm from "@/views/admin/contents/role/RoleAddForm";
import RoleIndex from "@/views/admin/contents/role/RoleIndex";
import RightIndex from "@/views/admin/contents/right/RightIndex";
import RoleEditForm from "@/views/admin/contents/role/RoleEditForm";
import ListUserInRole from "@/views/admin/contents/role/ListUserInRole";
const routes = [
  // admin auth
  {
    path: "/admin/login",
    name: "admin.login",
    component: LoginForm,
  },

  //home
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin/",
    name: "admin.index",
    component: DashBoard,
  },

  // admin.user
  {
    path: "/admin/user",
    name: "admin.user.index",
    component: UserIndex,
  },
  {
    path: "/admin/user/add",
    name: "admin.user.add",
    component: UserAddForm,
  },
  {
    path: "/admin/user/detail/:userId",
    name: "admin.user.detail",
    component: UserDetail,
  },
  {
    path: "/admin/user/edit/:userId",
    name: "admin.user.edit",
    component: UserEditForm,
  },

  // admin.menu
  {
    path: "/admin/menu",
    name: "admin.menu.index",
    component: MenuIndex,
  },
  {
    path: "/admin/menu/add",
    name: "admin.menu.add",
    component: MenuAddForm,
  },
  {
    path: "/admin/menu/edit/:menuId",
    name: "admin.menu.edit",
    component: MenuEditForm,
  },
  {
    path: "/admin/menu/edit/:menuId",
    name: "admin.menu.edit",
    component: MenuEditForm,
  },

  // admin.right
  {
    path: "/admin/right",
    name: "admin.right.index",
    component: RightIndex,
  },

  // admin.role
  {
    path: "/admin/role",
    name: "admin.role.index",
    component: RoleIndex,
  },
  {
    path: "/admin/role/add",
    name: "admin.role.add",
    component: RoleAddForm,
  },
  {
    path: "/admin/role/edit/:roleId",
    name: "admin.role.edit",
    component: RoleEditForm,
  },
  {
    path: "/admin/role/list-user/:roleId",
    name: "admin.role.list_users",
    component: ListUserInRole,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
