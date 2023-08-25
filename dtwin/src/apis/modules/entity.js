import Api from "../../apis";
import store from "../../store";
import { API_ADD_ENTITY, API_GET_ENTITIES, API_GET_ENTITY } from "@/config";

function prepareDateFormat(dateString) {
  return dateString.split("/").reverse().join("-");
}
export const headers = {
  Authorization: `Bearer ${store.getters["AUTH/getToken"]}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
export default {
  addEntity(data) {
    return Api.webApi().post(API_ADD_ENTITY, data, { headers });
  },
  async updateEntity(data) {
    //console.log("Update Entity", data);
    try {
      let response = await Api.webApi().post(
        `/entities/${data.id}/attrs`,
        data,
        {
          headers,
        }
      );
      console.log("updateEntityResponse: ", response);
      return true;
    } catch (e) {
      console.log({
        Type: "Err API updateEntity",
        File: "apis/modules/entity.js",
        Error: e,
      });
      return false;
    }
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
  async getInfoDetail(entity_id) {
    try {
      let response = await Api.webApi().get(`${API_GET_ENTITY}${entity_id}`, {
        headers,
      });
      console.log(response.data.data);
      let entity_json = response.data.data;
      return {
        id: entity_json.id,
        ten_toa_nha: entity_json.ten_toa_nha ? entity_json.ten_toa_nha : null,
        dien_tich: entity_json.dien_tich ? entity_json.dien_tich : null,
        so_tang: entity_json.so_tang ? entity_json.so_tang : null,
        dia_chi: {
          commune: entity_json.dia_chi.commune
            ? entity_json.dia_chi.commune
            : null,
          district: entity_json.dia_chi.district
            ? entity_json.dia_chi.district
            : null,
          province: entity_json.dia_chi.province
            ? entity_json.dia_chi.province
            : null,
          streetAddress: entity_json.dia_chi.streetAddress
            ? entity_json.dia_chi.streetAddress
            : null,
        },
        dia_chi_thua_dat: entity_json.dia_chi_thua_dat
          ? entity_json.dia_chi_thua_dat
          : null,

        ngay_hoan_thanh: entity_json.ngay_hoan_thanh
          ? prepareDateFormat(entity_json.ngay_hoan_thanh)
          : null,
        ngay_xay_dung: entity_json.ngay_xay_dung
          ? prepareDateFormat(entity_json.ngay_xay_dung)
          : null,
        trang_thai_toa_nha: entity_json.trang_thai_toa_nha
          ? entity_json.trang_thai_toa_nha
          : null,
        mat_do: entity_json.mat_do ? entity_json.mat_do : null,
        type: entity_json.type ? entity_json.type : null,
        phan_loai_toa_nha: entity_json.phan_loai_toa_nha
          ? entity_json.phan_loai_toa_nha
          : null,
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
