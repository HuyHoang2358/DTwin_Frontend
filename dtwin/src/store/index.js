import { createStore } from "vuex";
import AuthStore from "./modules/auth";
import ViewerStore from "./modules/viewer";
import PolygonStore from "./modules/polygon";
export default createStore({
  modules: {
    AUTH: AuthStore,
    VIEWER: ViewerStore,
    POLYGON: PolygonStore,
  },
});
