import Api from "../../apis";
import store from "../../store";
import { API_GET_ROLES } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  get_roles() {
    return Api().get(API_GET_ROLES, { headers });
  },
};
