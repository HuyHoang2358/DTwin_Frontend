<template>
  <MainLayout>
    <div>
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
      <div class="rounded-sm border border-stroke bg-white drop-shadow-xl">
        <div class="py-6 px-6">
          <div class="flex justify-between">
            <h4 class="text-xl font-bold text-black text-left">Menu List</h4>
            <router-link :to="{ name: 'admin.menu.add' }">
              <button
                class="inline-flex items-center justify-center gap-2.5 py-2 px-10 lg:px-8 xl:px-10 hover:bg-meta3 hover:text-white rounded-xl border-[1px] border-meta3 text-center font-bold bg-white text-meta3"
              >
                + Add new menu
              </button>
            </router-link>
          </div>
        </div>
        <div class="border-b-[1px] border-stroke px-6 pb-2">
          <div class="flex justify-end items-center">
            <h4 class="text-xl font-bold text-black text-left">
              Filter By: <span class="font-normal">App ID </span>
            </h4>
            <select
              class="ml-2 inline-flex items-center justify-center gap-2.5 py-2 hover:bg-meta3 hover:text-white rounded-xl border-[1px] border-meta3 text-center font-bold bg-white text-meta3"
              v-model="filter.appId"
              @change="filterByAppId()"
            >
              <option
                v-for="appId in appIds"
                :value="appId.name"
                :key="appId.id"
              >
                {{ appId.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="max-w-full overflow-x-auto p-6">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-center">
                <th class="py-4 px-4 font-normal text-black xl:pl-11">ID</th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">Name</th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">
                  Parent Id
                </th>

                <th class="py-4 px-4 font-normal text-black xl:pl-11">
                  Description
                </th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">Icon</th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">
                  App Id
                </th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">URL</th>
                <th class="py-4 px-4 font-normal text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="menu in menus"
                :key="menu.id"
                class="hover:bg-gray-100"
              >
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.id }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.name }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.parentId }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.description }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.icon }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.appId }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ menu.url }}
                  </p>
                </td>
                <td
                  class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                >
                  <div class="flex justify-center items-center space-x-3.5">
                    <router-link
                      :to="{
                        name: 'admin.menu.edit',
                        params: { menuId: menu.id },
                      }"
                      class="w-5 h-3"
                    >
                      <button class="w-full h-full hover:text-orange-500">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </router-link>
                    <router-link
                      :to="{
                        name: 'admin.menu.edit',
                        params: { menuId: menu.id },
                      }"
                      class="w-5 h-3"
                    >
                      <button class="w-full h-full hover:text-orange-500">
                        <icon-tag :name="'edit'"></icon-tag>
                      </button>
                    </router-link>
                    <button
                      class="w-5 h-4 hover:text-red-500"
                      @click="deleteMenu(menu.id)"
                    >
                      <icon-tag :name="'delete'"></icon-tag>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/admin/layouts/MainLayout";
import IconTag from "@/components/IconTag";
import axios from "axios";
import errorAlert from "@/components/alerts/ErrorAlert";
import successAlert from "@/components/alerts/SuccessAlert";

import {
  API_DELETE_MENU,
  API_DOMAIN,
  API_GET_MENUS,
  API_GET_MENU_BY_APPID,
  headers,
} from "@/config";

export default {
  props: [""],
  components: { MainLayout, IconTag, errorAlert, successAlert },
  data() {
    return {
      menus: [],
      alertInfo: {
        title: "111",
        content: "3323",
        status: 0, // 0 -> close 1->success  2->error
      },
      deleteIds: {
        menuList: [],
      },
      appIds: [
        {
          id: 0,
          name: "All App",
        },
        {
          id: 1,
          name: "KTTV",
        },
        {
          id: 2,
          name: "TEST",
        },
      ],
      filter: {
        appId: "All App",
      },
    };
  },
  created() {
    this.getALlMenus();
  },
  methods: {
    getALlMenus() {
      const endpoint = API_DOMAIN + API_GET_MENUS;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.menus = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    filterByAppId() {
      if (this.filter.appId === "All App") this.getALlMenus();
      else {
        const endpoint =
          API_DOMAIN + API_GET_MENU_BY_APPID + "?appId=" + this.filter.appId;
        axios
          .get(endpoint, { headers })
          .then((response) => {
            this.menus = response.data.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    deleteMenu(menuId) {
      if (confirm("Do you really want to delete?")) {
        const endpoint = API_DOMAIN + API_DELETE_MENU;
        this.deleteIds.menuList = [menuId];
        axios
          .post(endpoint, this.deleteIds, { headers })
          .then((response) => {
            this.alertInfo.status = 1;
            this.alertInfo.title = "Delete menu successfully";
            this.alertInfo.content = "Request ID: " + response.data.requestId;
            setTimeout(() => {
              this.alertInfo.status = 0;
              this.getALlMenus();
            }, 3000);
          })
          .catch((error) => {
            let errorResponse = error.response;
            this.alertInfo.status = 2;
            this.alertInfo.title =
              "Error when Delete menu - " + errorResponse.data.msg;
            this.alertInfo.content =
              "Request ID: " + errorResponse.data.requestId;
          });
      }
    },
  },
};
</script>
