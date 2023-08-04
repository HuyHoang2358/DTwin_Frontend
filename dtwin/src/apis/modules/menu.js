import Api from "../../apis";
import store from "../../store";
import { API_GET_MENUS, API_GET_CHILDS_MENUS } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  getAllMenus() {
    return Api().get(API_GET_MENUS, { headers });
  },
  getChildMenus(url) {
    return Api().get(`${API_GET_CHILDS_MENUS}?url=${url}`, { headers });
  },
};
