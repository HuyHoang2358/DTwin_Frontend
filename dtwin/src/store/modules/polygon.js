const state = {
  points: [], // [long, lat, long, lat]
};
const getters = {
  getPoints(state) {
    return state.points;
  },
  getEndPoint(state) {
    return state.points.length >= 2
      ? {
          longitude: state.points[state.points.length - 2],
          latitude: state.points[state.points.length - 1],
        }
      : null;
  },
};
const mutations = {
  ADD_POINT(state, point) {
    state.points.push(point);
  },
  CLEAR_POINTS(state) {
    state.points = [];
  },
};
const actions = {
  addPoint({ commit }, new_point) {
    commit("ADD_POINT", new_point);
  },
  clearPoints({ commit }) {
    commit("CLEAR_POINTS");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
