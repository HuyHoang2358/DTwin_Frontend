import Api from "../../apis";
import store from "../../store";
import { API_ADD_ENTITY, API_GET_ENTITIES, API_GET_ENTITY } from "@/config";

export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  addEntity(data) {
    return Api.webApi().post(API_ADD_ENTITY, data, { headers });
  },
  updateEntity(data) {
    console.log(data);
    return Api.webApi().post(`/entities/${data.id}/attrs`, data, { headers });
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
          color: 1,
        };
      });
    } catch (e) {
      console.log({
        Type: "Err API getAllEntities",
        File: "apis/modules/entity.js",
        Error: e,
      });
      return [];
    }
  },

  async getEntityInfo(entity_id) {
    try {
      let response = await Api.webApi().get(`${API_GET_ENTITY}${entity_id}`, {
        headers,
      });
      return {
        id: response.data.data.id,
        heading: response.data.data.heading,
        pitch: response.data.data.pitch,
        roll: response.data.data.roll,
        latitude: response.data.data.location.coordinates[1],
        longitude: response.data.data.location.coordinates[0],
        height: response.data.data.height,
        modelUrl: response.data.data.modelUrl,
        scale: response.data.data.scale * 100,
        type: response.data.data.type,
      };
    } catch (e) {
      console.log({
        Type: "Err API getEntityInfo",
        File: "apis/modules/entity.js",
        Error: e,
      });
      return null;
    }
  },
};
