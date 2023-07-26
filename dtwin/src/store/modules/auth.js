import AuthServices from "../../apis/modules/auth";

const state = {
  token: localStorage.getItem("token") || "",
};
const getters = {
  getToken(state) {
    return state.token;
  },
  isLoggedIn(state) {
    return !!state.token;
  },
};
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = null;
  },
};
const actions = {
  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  clearToken({ commit }) {
    commit("CLEAR_TOKEN");
  },
  async login({ commit }, credentials) {
    try {
      const response = await AuthServices.login(credentials);
      let token = response.data.data.accessToken;
      //console.log("token", token);
      commit("SET_TOKEN", token);
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.log("ERR LOGIN", error);
      throw error;
    }
  },
  async logout({ commit }) {
    commit("CLEAR_TOKEN");
    localStorage.removeItem("token");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
