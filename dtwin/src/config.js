export const API_DOMAIN = "http://172.16.30.214:9000/api/";
export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE2ODQ2MTYwNDUsInNjb3BlIjpbIlNZU1RFTS5WSUVXIiwiU1lTVEVNLkVESVQiXSwicm9sZSI6WyJTWVNURU1fQURNSU4iXSwidXNlcl9uYW1lIjoiYWRtaW4iLCJqdGkiOiJiNTI5ZDNlMS1kOWM3LTQ2ZmUtYmM3Zi03NjU5MjBiMzE5MDEifQ.d9ggXX_M9HccQpxFnz7NwhmiwYDgiFM_YxztDmCzZWSRmeVsBOWjlF5373Oo937m4KiouGNSM4l5SFnPlfKSnYMUgPotLrmVKVxBZZEm6yKkKj6x_HPfY2z6VJUILWyicRCcmtaNru0fFvxSlUxkrDHFejj7Y0tjyB1ewYsDoytig8zt1FYGncmeB2coPzofvNC0-363aX28xL7-HyF2GJfhOsbLIIWMJujQCmYEk8LyJ3jp--vXi5zFbxl1T2TY_E1pOMqmATH8xBVHeKO1vz8BEr1K0M1jY9njt3OJ44JVnwLdLX8HDyRBJKm5wUEw2y9kOgGKN8-cG53RE77WVA";
export const AUTHORIZATION = "Bearer " + TOKEN;
export const headers = {
  Authorization: AUTHORIZATION,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

// API detail
export const API_GET_USERS = "user/get-users";
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
