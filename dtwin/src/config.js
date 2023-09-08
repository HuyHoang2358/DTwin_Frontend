// API detail
export const API_GET_PROFILE = "user/get-user-profile";
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
export const API_GET_APPS = "app/get-all-app";

export const API_ADD_ENTITY = "/entities";
export const API_GET_ENTITIES = "entities/types/basicModel?type=";
export const API_GET_ENTITY = "entities/";

export const API_ADD_MAP = "/maps/add/";

export const ENV_NETWORK = "OFFLINE";

export const LOCAL_GLB_TEXTURE_FOLDER_PATH = "/Data/models/glb/texture/";
export const LOCAL_GLB_NO_TEXTURE_FOLDER_PATH = "/Data/models/glb/no_texture/";
export const MINIO_GLB_TEXTURE_FOLDER_PATH =
  "http://172.16.30.214:9000/dtp-model-18-8/building/glb/glb_texture/";
//"http://172.16.30.214:9000/model-3d-v2/building/glb/glb_texture/";
export const MINIO_GLB_NO_TEXTURE_FOLDER_PATH =
  "http://172.16.30.214:9000/dtp-model-18-8/building/glb/glb_no_texture/";
//"http://172.16.30.214:9000/model-3d-v2/building/glb/glb_no_texture/";
