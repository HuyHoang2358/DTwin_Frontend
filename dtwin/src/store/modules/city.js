const state = {
  building_entities: null,
  plant_entities: null,
  streetLight_entities: null,
  religion_entities: null,
  carPark_entities: null,
  bridge_entities: null,
  construction_entities: null,
  ship_entities: null,
  goods_entities: null,
  vehicle_entities: null,
  status: false, // true == on false == off
};
const getters = {
  getBuilding(state) {
    return state.building_entities;
  },
  getPlant(state) {
    return state.plant_entities;
  },
  getStreetLight(state) {
    return state.streetLight_entities;
  },
  getReligion(state) {
    return state.religion_entities;
  },
  getCarPark(state) {
    return state.carPark_entities;
  },
  getBridge(state) {
    return state.bridge_entities;
  },
  getConstruction(state) {
    return state.construction_entities;
  },
  getShip(state) {
    return state.ship_entities;
  },
  getGoods(state) {
    return state.goods_entities;
  },
  getVehicle(state) {
    return state.vehicle_entities;
  },
  getStatus(state) {
    return state.status;
  },
};
const mutations = {
  SET_BUILDING(state, building_entities) {
    state.building_entities = building_entities;
  },
  CLEAR_BUILDING(state) {
    state.building_entities = null;
  },
  SET_PLANT(state, plant_entities) {
    state.plant_entities = plant_entities;
  },
  CLEAR_PLANT(state) {
    state.plant_entities = null;
  },
  SET_STREETLIGHT(state, streetLight_entities) {
    state.streetLight_entities = streetLight_entities;
  },
  CLEAR_STREETLIGHT(state) {
    state.streetLight_entities = null;
  },
  SET_RELIGION(state, religion_entities) {
    state.religion_entities = religion_entities;
  },
  CLEAR_RELIGION(state) {
    state.religion_entities = null;
  },
  SET_CARPARK(state, carPark_entities) {
    state.carPark_entities = carPark_entities;
  },
  CLEAR_CARPARK(state) {
    state.carPark_entities = null;
  },
};
const actions = {
  addEntity({ commit }, new_entity) {
    commit("SET_ENTITY", new_entity);
  },
  clearEntity({ commit }) {
    commit("CLEAR_ENTITY");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
