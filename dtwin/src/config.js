//import store from "./store";
export const SYS_API_DOMAIN = "http://172.16.30.214:9000/api/";
export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2OTA2NTg1NzYsInNjb3BlIjpbIlNZU1RFTS5WSUVXIiwiU1lTVEVNLkVESVQiXSwicm9sZSI6WyJTWVNURU1fQURNSU4iXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJqdGkiOiI3OGQ3ZmVkNi0zZmQ1LTRlZTctYjZlYy0xMDYwMDVhY2JiY2QifQ.Dy5PIxNUU_jR9XmiN0V1e_rk_8p3WFhvY25C3Ya7Mbib0DJ6LqBfuveFO2Ecjupm2f7eEMDTAV71nWytjF3XAuYEDBz5OJNaaaSKz7M12ITCgh5Hf8qifrFN94GMnbBnjaJOq4kxSDKi63nIY0Twm_aJrSI3P1VZVAHkeWlHxoJDdPH9W2KC28Z8z_CUCf44E2RDVxiTlxUZ1-ni7rprGwPRe8Dd1gywJdgMNMA_LUTKqSjQxi15VMLMBveXEI6WLCWTbkl7je4WKCTXpskE-UAO6reLu8xbEicWtTH_nL9G9RQ6lG2UWlIDIhLtwRh9Ain-9KhXBo5NX-TP9BuOYg";
export const AUTHORIZATION = "Bearer " + TOKEN;
export const headers = {
  Authorization: AUTHORIZATION,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

// API detail
export const API_GET_USERS = "user/get-users";
export const API_CREATE_USER = "user/create-user";
export const API_GET_USER_BY_USERID = "user/get-user-profile-by-user-id";
export const API_EDIT_USER = "user/update-user";
export const API_SEARCH_USER = "user/search-users";

export const API_GET_MENUS = "menu/get-all-menu";
export const API_ADD_NEW_MENU = "menu/create-menu";
export const API_UPDATE_NEW_MENU = "menu/update-menu";
export const API_DELETE_MENU = "menu/delete-menu";
export const API_GET_MENU_BY_APPID = "menu/get-menu-by-app-id";

export const API_GET_ROLES = "role/get-all-role";
export const API_GET_ROLE = "role/get-role-detail";
export const API_GET_ROLE_BY_APPID = "role/get-role-by-app";
export const API_GET_USERS_IN_ROLE = "role/get-role-by-app";
export const API_ADD_NEW_ROLE = "role/create-role";
export const API_EDIT_ROLE = "role/update-role";
export const API_DELETE_ROLE = "role/delete-role";

export const API_GET_RIGHTS = "right/get-rights";
