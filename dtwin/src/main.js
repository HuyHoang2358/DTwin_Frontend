import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";
import "./assets/menu.css";
import "stream-browserify";
//import axios from "axios";

let app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

//Handling Expired Token (Forbidden Requests)
/*
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("AUTH/logout");
      return router.push("/login");
    }
  }
});
*/
