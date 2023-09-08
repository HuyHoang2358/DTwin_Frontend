import Api from "../../apis";
import store from "../../store";
import { API_ADD_MAP } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "multipart/form-data",
  "Access-Control-Allow-Origin": "*",
};
export default {
  addMap(data) {
    console.log("data111", data);
    return Api.webApi().post(API_ADD_MAP, data, { headers });
  },
};
