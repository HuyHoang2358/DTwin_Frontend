import Api from "../../apis";
import store from "../../store";
import { API_ADD_ENTITY, API_GET_ENTITIES } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  addEntity(data) {
    return Api.webApi().post(API_ADD_ENTITY, data, { headers });
  },
  async getAllEntities(type) {
    try {
      let response = await Api.webApi().get(`${API_GET_ENTITIES}${type}`, {
        headers,
      });
      return response.data.data.map((item) => {
        return {
          id: item.id,
          heading: item.heading,
          pitch: item.pitch,
          roll: item.roll,
          latitude: item.latitude,
          longitude: item.longitude,
          modelUrl: item.modelUrl,
          scale: item.scale,
          type: item.type,
        };
      });
    } catch (e) {
      console.log({
        Type: "Err API getAllEntities",
        File: "apis/modules/entity.js",
        Error: e,
      });
    }
  },
};
