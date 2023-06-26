<template>
  <MainLayout>
    <div class="flex justify-center">
      <div class="w-5/6">
        <error-alert
          :title="alertInfo.title"
          :content="alertInfo.content"
          v-if="alertInfo.status === 2"
        ></error-alert>
        <success-alert
          :title="alertInfo.title"
          :content="alertInfo.content"
          v-if="alertInfo.status === 1"
        ></success-alert>
        <div
          class="rounded-sm border border-stroke bg-white shadow-xl text-left w-full"
        >
          <div class="border-b border-stroke py-4 px-6">
            <h3 class="font-semibold text-black text-xl">Edit Role Form</h3>
          </div>
          <form v-on:submit.prevent="submitForm">
            <div class="p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-1">
                  <!-- ID -->
                  <!--                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Role ID </label>
                      <text-error
                        :text="error.id"
                        v-if="error.id !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter role id"
                      v-model="form.roleId"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>-->

                  <!-- Name -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Name </label>
                      <text-error
                        :text="error.name"
                        v-if="error.name !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      v-model="form.roleName"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>

                  <!-- App Id -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> App ID </label>
                      <text-error
                        :text="error.appId"
                        v-if="error.appId !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>
                    <select
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      v-model="form.appId"
                    >
                      <option
                        :value="appId.id"
                        v-for="appId in appIds"
                        :key="appId.id"
                      >
                        {{ appId.name }}
                      </option>
                    </select>
                  </div>

                  <!-- parent Id -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Parent ID </label>
                      <text-error
                        :text="error.parentId"
                        v-if="error.parentId !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>
                    <select
                      v-model="form.parentId"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    >
                      <option
                        v-for="roleItem in roles"
                        :value="roleItem.roleId"
                        :key="roleItem.roleId"
                      >
                        {{ roleItem.roleName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-span-1">
                  <!-- Menu In Role -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black">
                        Menu In Role
                      </label>
                      <text-error
                        :text="error.menuInRole"
                        v-if="error.menuInRole !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>
                    <div class="grid grid-cols-5 gap-4">
                      <div class="col-span-4">
                        <select
                          v-model="select.menu"
                          class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                        >
                          <option
                            v-for="menuItem in menus"
                            :value="menuItem"
                            :key="menuItem.id"
                          >
                            {{ menuItem.name }}
                          </option>
                        </select>
                      </div>
                      <div class="col-span-1">
                        <button
                          @click="addMenuToRole()"
                          type="button"
                          class="flex justify-center h-full rounded-lg bg-green-500 font-normal text-white px-8 py-2 border-[1px] border-green-500 hover:text-green-500 hover:bg-white items-center"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div class="mt-4">
                      <button
                        @click="removeMenuOutRole(menuInRole_item.id)"
                        class="border-[1px] border-green-500 rounded-lg px-4 ml-2 mt-2 text-base hover:bg-red-500 hover:text-white hover:border-red-500"
                        type="button"
                        v-for="menuInRole_item in menuInRoleList"
                        :key="menuInRole_item.id"
                      >
                        {{ menuInRole_item.name }}
                      </button>
                    </div>
                  </div>

                  <!-- Right In Role -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black">
                        Right In Role
                      </label>
                      <text-error
                        :text="error.rightInRole"
                        v-if="error.rightInRole !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>
                    <div class="grid grid-cols-5 gap-4">
                      <div class="col-span-4">
                        <select
                          v-model="select.right"
                          class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                        >
                          <option
                            v-for="rightItem in rights"
                            :value="rightItem"
                            :key="rightItem.rightId"
                          >
                            {{ rightItem.rightName }}
                          </option>
                        </select>
                      </div>
                      <div class="col-span-1">
                        <button
                          @click="addRightToRole()"
                          type="button"
                          class="flex justify-center h-full rounded-lg bg-green-500 font-normal text-white px-8 py-2 border-[1px] border-green-500 hover:text-green-500 hover:bg-white items-center"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div class="mt-4">
                      <button
                        @click="removeRightOutRole(rightInRoleList_item.id)"
                        class="border-[1px] border-green-500 rounded-lg px-4 ml-2 mt-2 text-base hover:bg-red-500 hover:text-white hover:border-red-500"
                        type="button"
                        v-for="rightInRoleList_item in rightInRoleList"
                        :key="rightInRoleList_item.id"
                      >
                        {{ rightInRoleList_item.name }}
                      </button>
                    </div>
                  </div>

                  <!-- User In Role -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black">
                        User In Role
                      </label>
                      <text-error
                        :text="error.description"
                        v-if="error.description !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>
                    <div class="grid grid-cols-5 gap-4">
                      <div class="col-span-4">
                        <input
                          type="text"
                          placeholder="Enter your name"
                          v-model="select.userName"
                          @input="searchUser()"
                          class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                        />
                      </div>
                      <div class="col-span-1">
                        <button
                          @click="addUserToRole()"
                          type="button"
                          class="flex justify-center h-full rounded-lg bg-green-500 font-normal text-white px-8 py-2 border-[1px] border-green-500 hover:text-green-500 hover:bg-white items-center"
                        >
                          Add
                        </button>
                      </div>
                      <div class="col-span-4 border-[1px] border-gray-300">
                        <div
                          class="w-full"
                          v-for="user in users"
                          :key="user.id"
                        >
                          <button
                            type="button"
                            class="hover:bg-orange-300 w-full text-left pl-8"
                            @click="chooseUser(user)"
                          >
                            {{ user.name }}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <button
                        @click="removeUserOutRole(userInRoleList_item.id)"
                        class="border-[1px] border-green-500 rounded-lg px-4 ml-2 mt-2 text-base hover:bg-red-500 hover:text-white hover:border-red-500"
                        type="button"
                        v-for="userInRoleList_item in userInRoleList"
                        :key="userInRoleList_item.id"
                      >
                        {{ userInRoleList_item.name }}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-span-1"></div>
                <div class="col-span-1">
                  <!-- Submit button-->
                  <div class="flex justify-end gap-4 mt-4">
                    <router-link :to="{ name: 'admin.role.index' }">
                      <button
                        type="button"
                        class="flex justify-center rounded-lg bg-orange-400 font-normal text-white border-[1px] border-orange-400 px-8 py-2 hover:bg-white hover:text-orange-500"
                      >
                        Cancel
                      </button>
                    </router-link>
                    <button
                      type="submit"
                      class="flex justify-center rounded-lg bg-primary font-normal text-white px-8 py-2 border-[1px] border-primary hover:text-primary hover:bg-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/admin/layouts/MainLayout";
import textError from "@/components/notifications/TextError";
import axios from "axios";
import errorAlert from "@/components/alerts/ErrorAlert";
import successAlert from "@/components/alerts/SuccessAlert";
import {
  SYS_API_DOMAIN,
  API_EDIT_ROLE,
  API_GET_MENUS,
  API_GET_RIGHTS,
  API_GET_ROLE,
  API_GET_ROLES,
  API_SEARCH_USER,
  headers,
} from "@/config";

export default {
  props: [""],
  components: { MainLayout, textError, successAlert, errorAlert },
  data() {
    return {
      select: {
        menu: "",
        userName: "",
        userId: "",
        right: "",
      },
      menuInRoleList: [],
      rightInRoleList: [],
      userInRoleList: [],
      form: {
        roleName: "",
        roleId: "",
        appId: "1",
        parentId: "SYSTEM_ADMIN",
        menuInRole: [],
        rightInRole: [],
        userInRole: [],
      },
      error: {
        roleName: "",
        roleId: "",
        appId: "",
        parentId: "",
        menuInRole: "",
        rightInRole: "",
        userInRole: "",
      },
      alertInfo: {
        title: "111",
        content: "3323",
        status: 0, // 0 -> close 1->success  2->error
      },
      appIds: [
        {
          id: 1,
          name: "KTTV",
        },
        {
          id: 0,
          name: "No App",
        },
      ],
      roles: [],
      menus: [],
      rights: [],
      users: [],
      role: "",
      roleId: this.$route.params.roleId,
    };
  },
  created() {
    this.getRoleDetail();
    this.getALlRoles();
    this.getALlMenus();
    this.getAllRights();
  },
  methods: {
    submitForm() {
      console.log(this.form);
      const endpoint = SYS_API_DOMAIN + API_EDIT_ROLE;
      axios
        .post(endpoint, this.form, { headers })
        .then((response) => {
          this.alertInfo.status = 1;
          this.alertInfo.title = "Update Role successfully";
          this.alertInfo.content = "Request ID: " + response.data.requestId;
          setTimeout(() => {
            this.alertInfo.status = 0;
            this.$router.push("/admin/role");
          }, 3000);
        })
        .catch((error) => {
          console.log(error.response);
          let errorResponse = error.response;
          this.alertInfo.status = 2;
          this.alertInfo.title =
            "Error when Add new role - " + errorResponse.data.msg;
          this.alertInfo.content =
            "Request ID: " + errorResponse.data.requestId;
        });
    },
    getALlRoles() {
      const endpoint = SYS_API_DOMAIN + API_GET_ROLES;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.roles = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getALlMenus() {
      const endpoint = SYS_API_DOMAIN + API_GET_MENUS;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.menus = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getAllRights() {
      const endpoint = SYS_API_DOMAIN + API_GET_RIGHTS;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.rights = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchUser() {
      this.page = 0;
      if (this.select.userName !== "") {
        const endpoint =
          SYS_API_DOMAIN +
          API_SEARCH_USER +
          "?page=0&searchValue=" +
          this.select.userName +
          "&size=5";
        axios
          .get(endpoint, { headers })
          .then((response) => {
            this.users = response.data.data.items;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    addMenuToRole() {
      if (
        this.select.menu &&
        !this.form.menuInRole.includes(this.select.menu.id)
      ) {
        let menu_item = {
          id: this.select.menu.id,
          name: this.select.menu.name,
        };
        this.menuInRoleList.push(menu_item);
        this.form.menuInRole.push(menu_item.id);
      }
    },
    removeMenuOutRole(id) {
      this.form.menuInRole = this.form.menuInRole.filter((el) => el !== id);
      this.menuInRoleList = this.menuInRoleList.filter((el) => el.id !== id);
    },
    addRightToRole() {
      if (
        this.select.right &&
        !this.form.rightInRole.includes(this.select.right.rightId)
      ) {
        let right_item = {
          id: this.select.right.rightId,
          name: this.select.right.rightName,
        };
        this.rightInRoleList.push(right_item);
        this.form.rightInRole.push(right_item.id);
      }
    },
    removeRightOutRole(id) {
      this.form.rightInRole = this.form.rightInRole.filter((el) => el !== id);
      this.rightInRoleList = this.rightInRoleList.filter((el) => el.id !== id);
    },
    chooseUser(user) {
      this.select.userName = user.name;
      this.select.userId = user.userId;
    },
    addUserToRole() {
      if (
        this.select.userName &&
        !this.form.userInRole.includes(this.select.userId)
      ) {
        let user_item = {
          id: this.select.userId,
          name: this.select.userName,
        };
        this.userInRoleList.push(user_item);
        this.form.userInRole.push(user_item.id);
      }
      this.users = [];
      this.select.userName = "";
    },
    removeUserOutRole(id) {
      this.form.userInRole = this.form.userInRole.filter((el) => el !== id);
      this.userInRoleList = this.userInRoleList.filter((el) => el.id !== id);
    },

    getRoleDetail() {
      const endpoint = SYS_API_DOMAIN + API_GET_ROLE + "?roleId=" + this.roleId;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          let data = response.data.data;

          this.form.appId = data.role.appId;
          this.form.parentId = data.role.parentId;
          this.form.roleId = data.role.roleId;
          this.form.roleName = data.role.roleName;
          for (let i = 0; i < data.menuInRole.length; i++) {
            let item = {
              id: data.menuInRole[i]["id"],
              name: data.menuInRole[i]["name"],
            };
            this.menuInRoleList.push(item);
            this.form.menuInRole.push(item["id"]);
          }

          for (let i = 0; i < data.rightInRole.length; i++) {
            let item = {
              id: data.rightInRole[i]["rightId"],
              name: data.rightInRole[i]["rightName"],
            };
            this.rightInRoleList.push(item);
            this.form.rightInRole.push(item["id"]);
          }

          for (let i = 0; i < data.userInRole.length; i++) {
            let item = {
              id: data.userInRole[i]["userId"],
              name: data.userInRole[i]["name"],
            };
            this.userInRoleList.push(item);
            this.form.userInRole.push(item["id"]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
