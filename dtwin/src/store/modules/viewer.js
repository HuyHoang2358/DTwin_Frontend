const state = {
  viewer: null,
};
const getters = {
  getViewer(state) {
    return state.viewer;
  },
};
const mutations = {
  SET_VIEWER(state, viewer) {
    state.viewer = viewer;
  },
  CLEAR_VIEWER(state) {
    state.viewer = null;
  },
};
const actions = {
  setViewer({ commit }, newViewer) {
    commit("SET_VIEWER", newViewer);
  },
  clearViewer({ commit }) {
    commit("CLEAR_VIEWER");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
