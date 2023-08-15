import request from "axios";

export default {
  systemApi() {
    return request.create({
      baseURL: "http://172.16.30.214:9999/api/",
    });
  },
  webApi() {
    return request.create({
      baseURL: "http://172.16.30.214:8888/api/",
    });
  },
};
