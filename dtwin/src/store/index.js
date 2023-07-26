import { createStore } from "vuex";
import AuthStore from "./modules/auth";

export default createStore({
  modules: {
    AUTH: AuthStore,
  },
});
