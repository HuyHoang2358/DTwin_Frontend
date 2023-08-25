const state = {
  viewer: null,
  selected_entity: null,
};
const getters = {
  getViewer(state) {
    return state.viewer;
  },
  getSelectedEntity(state) {
    return state.selected_entity;
  },
};
const mutations = {
  SET_VIEWER(state, viewer) {
    state.viewer = viewer;
  },
  CLEAR_VIEWER(state) {
    state.viewer = null;
  },
  SET_SELECTED_ENTITY(state, entity) {
    state.selected_entity = entity;
  },
  CLEAR_SELECTED_ENTITY() {
    state.selected_entity = null;
  },
};
const actions = {
  setViewer({ commit }, newViewer) {
    commit("SET_VIEWER", newViewer);
  },
  clearViewer({ commit }) {
    commit("CLEAR_VIEWER");
  },
  setSelectedEntity({ commit }, newSelectedEntity) {
    commit("SET_SELECTED_ENTITY", newSelectedEntity);
  },
  clearSelectedEntity({ commit }) {
    commit("CLEAR_SELECTED_ENTITY");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
