import Api from "../../apis";

export default {
  login(credentials) {
    let au = btoa(credentials.identity + ":" + credentials.password);
    console.log(
      "Login infor: ",
      credentials.identity + ":" + credentials.password,
      au
    );
    let url =
      "generate-token?appId=SYSTEM&grantType=PASSWORD_GRANT&secret=a2ab6cb1-8dc6-4b5c-b202-59b65a4cbddb";
    let headers = {
      Authorization: "Basic " + au,
    };

    return Api().get(url, { headers });
  },
  register() {
    return Api().post("register");
  },
};
