import Api from "../../apis";
import store from "../../store";
import { API_CREATE_USER, API_GET_USERS, API_SEARCH_USER } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  get_users(page, pageSize) {
    const endpoint = API_GET_USERS + "?page=" + page + "&size=" + pageSize;
    return Api().get(endpoint, { headers });
  },

  search_user(searchValue, page, pageSize) {
    const endpoint = `${API_SEARCH_USER}?page=${page}&searchValue=${searchValue}&size=${pageSize}`;
    return Api().get(endpoint, { headers });
  },

  add_user(data) {
    const endpoint = `${API_CREATE_USER}`;
    return Api().post(endpoint, data, { headers });
  },
};
