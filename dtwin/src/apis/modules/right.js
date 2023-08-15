import Api from "../../apis";
import store from "../../store";
import { API_GET_RIGHTS } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  get_rights() {
    return Api.systemApi().get(API_GET_RIGHTS, { headers });
  },
};
