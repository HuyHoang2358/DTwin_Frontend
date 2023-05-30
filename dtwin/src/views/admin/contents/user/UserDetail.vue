<template>
  <MainLayout>
    <div class="flex items-center justify-center">
      <div
        class="rounded-sm border border-stroke bg-white shadow-xl text-left w-3/5"
      >
        <div class="border-b border-stroke py-4 px-6">
          <h3 class="font-semibold text-black text-xl">User Information</h3>
        </div>

        <div class="p-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid-span-1">
              <!-- Name -->
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <label class="mb-2 block text-black font-semibold">
                    Name:
                    <span class="font-normal">{{ user.name }}</span></label
                  >
                </div>
              </div>

              <!-- Username -->
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <label class="mb-2 block text-black font-semibold">
                    UserId: <span class="font-normal">{{ user.userId }}</span>
                  </label>
                </div>
              </div>
              <!-- Site -->
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <label class="mb-2 block text-black font-semibold">
                    Site: <span class="font-normal">{{ user.site }}</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="grid-span-1">
              <!-- Email -->
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <label class="mb-2 block text-black font-semibold">
                    Email: <span class="font-normal">{{ user.email }}</span>
                  </label>
                </div>
              </div>

              <!-- Phone -->
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <label class="mb-2 block text-black font-semibold">
                    Phone: <span class="font-normal">{{ user.phone }}</span>
                  </label>
                </div>
              </div>

              <!-- Address -->
              <div class="mb-4">
                <div class="flex justify-between items-center">
                  <label class="mb-2 block text-black font-semibold">
                    Address: <span class="font-normal">{{ user.address }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-4 mt-4">
            <router-link :to="{ name: 'admin.user.index' }">
              <button
                type="button"
                class="flex justify-center rounded-lg bg-orange-400 font-normal text-white border-[1px] border-orange-400 px-8 py-2 hover:bg-white hover:text-orange-500"
              >
                Users List
              </button>
            </router-link>

            <router-link
              :to="{
                name: 'admin.user.edit',
                params: { userId: this.userId },
              }"
            >
              <button
                class="flex justify-center rounded-lg bg-primary font-normal text-white px-8 py-2 border-[1px] border-primary hover:text-primary hover:bg-white"
              >
                Edit
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/admin/layouts/MainLayout";
import { API_DOMAIN, API_GET_USER_BY_USERID, headers } from "@/config";
import axios from "axios";

export default {
  props: [],
  components: { MainLayout },
  data() {
    return {
      userId: this.$route.params.userId,
      user: {
        name: "",
        email: "",
        site: "",
        phone: "",
        address: "",
        userId: "",
      },
    };
  },
  created() {
    this.getUserInformation();
  },
  methods: {
    getUserInformation() {
      const endpoint =
        API_DOMAIN + API_GET_USER_BY_USERID + "?userId=" + this.userId;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.user = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
