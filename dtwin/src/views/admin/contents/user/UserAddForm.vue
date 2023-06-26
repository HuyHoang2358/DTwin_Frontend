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
            <h3 class="font-semibold text-black text-xl">Add New User Form</h3>
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

                  <!-- Site -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Site </label>
                      <text-error
                        :text="error.site"
                        v-if="error.site !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter your site"
                      v-model="form.site"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>

                  <!-- Email -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Email </label>
                      <text-error
                        :text="error.email"
                        v-if="error.email !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      v-model="form.email"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>

                  <!-- Username -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Username </label>
                      <text-error
                        :text="error.userId"
                        v-if="error.userId !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter your username"
                      v-model="form.userId"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>
                </div>
                <div class="grid-span-1">
                  <!-- Phone -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Phone </label>
                      <text-error
                        :text="error.phone"
                        v-if="error.phone !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      v-model="form.phone"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>

                  <!-- Address -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Address </label>
                      <text-error
                        :text="error.address"
                        v-if="error.address !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter your address "
                      v-model="form.address"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                      required
                    />
                  </div>

                  <!-- Password -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black"> Password </label>
                      <text-error
                        :text="error.password"
                        v-if="error.password !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="password"
                      placeholder="Enter password"
                      v-model="form.password"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>

                  <!-- Password confirm -->
                  <div class="mb-4">
                    <div class="flex justify-between items-center">
                      <label class="mb-2 block text-black">
                        Password Confirm</label
                      >
                      <text-error
                        :text="error.passwordConfirm"
                        v-if="error.passwordConfirm !== ''"
                        class="mr-12"
                      ></text-error>
                    </div>

                    <input
                      type="password"
                      placeholder="Enter password confirm"
                      v-model="form.passwordConfirm"
                      class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                    />
                  </div>
                </div>
              </div>

              <div class="flex justify-end gap-4 mt-4">
                <router-link :to="{ name: 'admin.user.index' }">
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
import { API_CREATE_USER, SYS_API_DOMAIN, headers } from "@/config";

export default {
  props: [""],
  components: { MainLayout, textError, successAlert, errorAlert },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        site: "",
        address: "",
        password: "",
        passwordConfirm: "",
        userId: "",
      },
      error: {
        name: "",
        email: "",
        phone: "",
        site: "",
        address: "",
        password: "",
        passwordConfirm: "",
        userId: "",
      },
      alertInfo: {
        title: "111",
        content: "3323",
        status: 0, // 0 -> close 1->success  2->error
      },
    };
  },
  methods: {
    validateName() {
      if (this.name === "") {
        this.error.name = "Name is not empty!";
        return false;
      }
      if (this.name.length > 150) {
        this.error.name = "Name is too long!";
        return false;
      }
      this.error.name = "";
      return true;
    },

    submitForm() {
      const endpoint = SYS_API_DOMAIN + API_CREATE_USER;
      axios
        .post(endpoint, this.form, { headers })
        .then((response) => {
          this.alertInfo.status = 1;
          this.alertInfo.title = "Add User successfully";
          this.alertInfo.content = "Request ID: " + response.data.requestId;
          setTimeout(() => {
            this.alertInfo.status = 0;
            this.$router.push("/admin/user");
          }, 3000);
        })
        .catch((error) => {
          let errorResponse = error.response;
          this.alertInfo.status = 2;
          this.alertInfo.title =
            "Error when Add new user - " + errorResponse.data.msg;
          this.alertInfo.content =
            "Request ID: " + errorResponse.data.requestId;
        });
    },
  },
};
</script>
