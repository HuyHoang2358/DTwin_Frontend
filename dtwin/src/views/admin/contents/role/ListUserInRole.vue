<template>
  <MainLayout>
    <div>
      <div class="rounded-sm border border-stroke bg-white drop-shadow-xl">
        <div class="py-6 px-6 border-b-[1px] border-stroke">
          <div class="flex justify-between">
            <h4 class="text-xl font-bold text-black text-left">
              List Users in Role
            </h4>
          </div>
        </div>
        <div class="max-w-full overflow-x-auto p-6">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-center">
                <th
                  class="min-w-[220px] py-4 px-4 font-normal text-black xl:pl-11"
                >
                  Name
                </th>
                <th
                  class="min-w-[220px] py-4 px-4 font-normal text-black xl:pl-11"
                >
                  Email
                </th>
                <th
                  class="min-w-[220px] py-4 px-4 font-normal text-black xl:pl-11"
                >
                  Address
                </th>
                <th
                  class="min-w-[220px] py-4 px-4 font-normal text-black xl:pl-11"
                >
                  Phone
                </th>
                <th class="py-4 px-4 font-normal text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="user in users"
                :key="user.userId"
                class="hover:bg-gray-100"
              >
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ user.name }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ user.email }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ user.address }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ user.phone }}
                  </p>
                </td>
                <td
                  class="border-b border-[#eee] py-5 px-4 dark:border-strokedark"
                >
                  <div class="flex justify-center items-center space-x-3.5">
                    <router-link
                      :to="{
                        name: 'admin.user.detail',
                        params: { userId: user.userId },
                      }"
                      class="w-5 h-3"
                    >
                      <button class="w-full h-full hover:text-green-500">
                        <icon-tag :name="'eye-detail'"></icon-tag>
                      </button>
                    </router-link>
                    <router-link
                      :to="{
                        name: 'admin.user.edit',
                        params: { userId: user.userId },
                      }"
                      class="w-5 h-3"
                    >
                      <button class="w-full h-full hover:text-orange-500">
                        <icon-tag :name="'edit'"></icon-tag>
                      </button>
                    </router-link>
                    <button class="w-5 h-4 hover:text-red-500">
                      <icon-tag :name="'delete'"></icon-tag>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Load More button -->
        <div class="flex justify-between items-center bt-4 mb-8">
          <div></div>
          <div class="flex justify-center items-center">
            <div v-for="page_index in totalPage" :key="page_index">
              <button
                @click="openPage(page_index)"
                class="inline-flex items-center justify-center gap-2.5 rounded-xl border border-primary py-2 text-center font-blue-500 text-black bg-white hover:bg-gray-200 px-4 mr-2"
                v-if="page_index !== page + 1"
              >
                {{ page_index }}
              </button>

              <button
                @click="openPage(page_index)"
                class="inline-flex items-center justify-center rounded-xl border border-primary py-2 text-center font-blue-500 text-black bg-gray-200 hover:bg-white px-4 mr-2"
                v-else
              >
                {{ page_index }}
              </button>
            </div>
          </div>
          <div>
            <div class="flex items-center mr-4">
              <i class="fa-solid fa-grip text-2xl"></i>
              <select
                v-model="pageSizeSelect"
                class="border-0 outline-0 focus:ring-0"
                @change="pageSizeChange()"
              >
                <option value="4" selected v-if="pageSize === 4">4</option>
                <option value="4" v-else>4</option>
                <option value="8" selected v-if="pageSize === 8">8</option>
                <option value="8" v-else>8</option>
                <option value="16" selected v-if="pageSize === 16">16</option>
                <option value="16" v-else>16</option>
                <option value="32" selected v-if="pageSize === 32">32</option>
                <option value="32" v-else>32</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/admin/layouts/MainLayout";
import IconTag from "@/components/IconTag";
import axios from "axios";
import { SYS_API_DOMAIN, API_GET_USERS_IN_ROLE, headers } from "@/config";
export default {
  props: [""],
  components: { MainLayout, IconTag },
  data() {
    return {
      pageSizeSelect: 4,
      users: [],
      totalPage: 0,
      pageSize: 4,
      page: 0,
      totalUser: 0,
      roleId: this.$route.params.roleId,
    };
  },
  created() {
    this.getUsersInRole();
  },
  methods: {
    getUsersInRole() {
      const endpoint =
        SYS_API_DOMAIN +
        API_GET_USERS_IN_ROLE +
        "?page=" +
        this.page +
        "&size=" +
        this.pageSize;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          let data = response.data.data;
          this.totalPage = data.totalPage;
          this.page = data.page;
          this.totalUser = data.total;
          this.users = data.items;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    openPage(pageIndex) {
      this.page = pageIndex - 1;
      this.getAllUsers();
    },
    pageSizeChange() {
      this.page = 0;
      this.pageSize = this.pageSizeSelect;
      this.getAllUsers();
    },
  },
};
</script>
