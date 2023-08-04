//import store from "./store";
export const SYS_API_DOMAIN = "http://172.16.30.214:9000/api/";
export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2OTExNjA4NjQsInNjb3BlIjpbIlNZU1RFTS5WSUVXIiwiU1lTVEVNLkVESVQiXSwicm9sZSI6WyJTWVNURU1fQURNSU4iLCJTWVNURU1fUk9PVCJdLCJ1c2VyX25hbWUiOiJhZG1pbiIsImp0aSI6IjMzMjkzNDZjLTg2MGItNDk5Mi1hOWNiLTFjOGQ2Mzk4ZjVkMCJ9.JHYkBfvLAHNIv9nUsgkxM14uWm2WeZbIH6I-X-vF-hprUGGanyWvcDY5AkUQZ9E14Fr6IEgzu_Z5C3MAq7Wzr68g4mw4bbY1KAsEyUplZR4NNyHiuq3mxohI2uxJ36lP8Awm36gif60N_DELk0WFlBkrbIUSBpVfkkJ54QtmX6IygEVXTgdF3sTk8tlvcPeKEqnZtN8-TZyhjcrSpFoyUv6ROxdort55Puru91voMxkX0KLw8xnU5bwJ5fBcyaUu_3c_cw57Yww305ihSuzu9IBcxrUARGtwmFEz90-skHOzfpUcMRdqy4tw8cKriyeGUHGXLwMC4Hd6Liv_3trkjw";
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
export const API_DELETE_USER = "user/delete-user";
export const API_SEARCH_USER = "user/search-users";

export const API_GET_MENUS = "menu/get-all-menu";
export const API_ADD_NEW_MENU = "menu/create-menu";
export const API_UPDATE_NEW_MENU = "menu/update-menu";
export const API_DELETE_MENU = "menu/delete-menu";
export const API_GET_MENU_BY_APPID = "menu/get-menu-by-app-id";
export const API_GET_CHILDS_MENUS = "menu/get-menu-by-url-parent-menu";

export const API_GET_ROLES = "role/get-all-role";
export const API_GET_ROLE = "role/get-role-detail";
export const API_GET_ROLE_BY_APPID = "role/get-role-by-app";
export const API_GET_USERS_IN_ROLE = "role/get-role-by-app";
export const API_ADD_NEW_ROLE = "role/create-role";
export const API_EDIT_ROLE = "role/update-role";
export const API_DELETE_ROLE = "role/delete-role";

export const API_GET_RIGHTS = "right/get-rights";
