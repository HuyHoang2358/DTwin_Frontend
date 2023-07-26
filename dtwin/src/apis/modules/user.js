import Api from "../../apis";
import store from "../../store";
import { API_GET_USERS } from "@/config";
export default {
  get_users(page, pageSize) {
    console.log("Get users");
    const endpoint = API_GET_USERS + "?page=" + page + "&size=" + pageSize;
    console.log(endpoint);

    const headers = {
      Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    return Api().get(endpoint, { headers });
  },
};
