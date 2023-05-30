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
            <h3 class="font-semibold text-black text-xl">Add New Menu Form</h3>
          </div>
          <form v-on:submit.prevent="submitForm">
            <div class="p-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid-span-1">
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
                      v-model="form.name"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>

                  <!-- URL -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> URL </label>
                      <text-error
                        :text="error.url"
                        v-if="error.url !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter URL "
                      v-model="form.url"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>

                  <!-- Icon -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Icon </label>
                      <text-error
                        :text="error.icon"
                        v-if="error.icon !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter your link of Icon"
                      v-model="form.icon"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>

                  <!-- SortOrder -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Sort Order </label>
                      <text-error
                        :text="error.sortOrder"
                        v-if="error.sortOrder !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter sortOrder default = 0"
                      v-model="form.sortOrder"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                </div>
                <div class="grid-span-1">
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
                        v-for="menuItem in menus"
                        :value="menuItem.id"
                        :key="menuItem.id"
                      >
                        {{ menuItem.name }}
                      </option>
                    </select>
                  </div>

                  <!-- Description -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Description </label>
                      <text-error
                        :text="error.description"
                        v-if="error.description !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <textarea
                      type="text"
                      placeholder="Enter description for menu"
                      v-model="form.description"
                      class="w-full h-36 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    >
                    </textarea>
                  </div>
                </div>
              </div>

              <div class="flex justify-end gap-4 mt-4">
                <router-link :to="{ name: 'admin.menu.index' }">
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
import { API_ADD_NEW_MENU, API_DOMAIN, API_GET_MENUS, headers } from "@/config";

export default {
  props: [""],
  components: { MainLayout, textError, successAlert, errorAlert },
  data() {
    return {
      form: {
        name: "",
        url: "",
        icon: "",
        sortOrder: "",
        appId: "",
        parentId: "",
        description: "",
      },
      error: {
        name: "",
        url: "",
        icon: "",
        sortOrder: "",
        appId: "",
        parentId: "",
        description: "",
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
      menus: [],
    };
  },
  created() {
    this.getALlMenus();
  },
  methods: {
    submitForm() {
      const endpoint = API_DOMAIN + API_ADD_NEW_MENU;
      axios
        .post(endpoint, this.form, { headers })
        .then((response) => {
          this.alertInfo.status = 1;
          this.alertInfo.title = "Add menu successfully";
          this.alertInfo.content = "Request ID: " + response.data.requestId;
          setTimeout(() => {
            this.alertInfo.status = 0;
            this.$router.push("/admin/menu");
          }, 3000);
        })
        .catch((error) => {
          let errorResponse = error.response;
          this.alertInfo.status = 2;
          this.alertInfo.title =
            "Error when Add new menu - " + errorResponse.data.msg;
          this.alertInfo.content =
            "Request ID: " + errorResponse.data.requestId;
        });
    },
    getALlMenus() {
      const endpoint = API_DOMAIN + API_GET_MENUS;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          let data = response.data.data;
          this.menus = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
