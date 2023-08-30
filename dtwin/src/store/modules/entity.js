const state = {
  entity: null,
};
const getters = {
  getEntity(state) {
    return state.entity;
  },
};
const mutations = {
  SET_ENTITY(state, entity) {
    state.entity = entity;
  },
  CLEAR_ENTITY(state) {
    state.entity = null;
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
