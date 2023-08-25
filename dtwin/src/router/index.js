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
import MapEditPage from "@/views/map/MapEditPage.vue";
import TongQuanDoThi from "@/views/front/contents/tongquandothi/TongQuanDoThi.vue";
import QuyHoachTongThe from "@/views/front/contents/quyhoachtongthe/QuyHoachTongThe.vue";
import HaTangDothi from "@/views/front/contents/quanlyhatang/HaTangDothi.vue";
import HaTangDothi_XayDung from "@/views/front/contents/quanlyhatang/HaTangDothi_XayDung.vue";
import TongQuanDoThi_TongQuan1 from "@/views/front/contents/tongquandothi/TongQuanDoThi_TongQuan1.vue";
import QuyHoachTongThe_TongQuan1 from "@/views/front/contents/quyhoachtongthe/QuyHoachTongThe_TongQuan1.vue";
import MapThuaDat from "@/views/map/MapThuaDat.vue";

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
    meta: { requiresAuth: true },
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
  {
    path: "/map/edit",
    name: "map.edit",
    component: MapEditPage,
    meta: { guest: true },
  },
  {
    path: "/map/thua-dat/edit",
    name: "map.thua_dat.edit",
    component: MapThuaDat,
    meta: { guest: true },
  },
  {
    path: "/tong-quan-do-thi",
    name: "tongquandothi.index",
    component: TongQuanDoThi,
    meta: { requiresAuth: true },
  },
  {
    path: "/tong-quan-do-thi/tong-quan-1",
    name: "tongquandothi.tongquan1",
    component: TongQuanDoThi_TongQuan1,
    meta: { requiresAuth: true },
  },
  {
    path: "/quy-hoach-tong-the",
    name: "quyhoachtongthe.index",
    component: QuyHoachTongThe,
    meta: { requiresAuth: true },
  },
  {
    path: "/quy-hoach-tong-the/tong-quan-1",
    name: "quyhoachtongthe.tongquan1",
    component: QuyHoachTongThe_TongQuan1,
    meta: { requiresAuth: true },
  },
  {
    path: "/quan-ly-ha-tang-do-thi",
    name: "quanlyhatangdothi.index",
    component: QuyHoachTongThe,
    meta: { requiresAuth: true },
  },
  {
    path: "/quan-ly-giao-thong",
    name: "quanlygiaothong.index",
    component: QuyHoachTongThe,
    meta: { requiresAuth: true },
  },
  {
    path: "/ha-tang-do-thi",
    name: "hatangdothi.index",
    component: HaTangDothi,
    meta: { requiresAuth: true },
  },
  {
    path: "/ha-tang-do-thi/xay-dung",
    name: "hatangdothi.xaydung",
    component: HaTangDothi_XayDung,
    meta: { requiresAuth: true },
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
