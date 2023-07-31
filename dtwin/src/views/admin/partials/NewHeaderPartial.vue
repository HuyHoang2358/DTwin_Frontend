<template>
  <header class="sticky top-0 z-40 flex w-full bg-white drop-shadow-md">
    <div
      class="flex flex-grow items-center justify-end py-4 px-4 shadow-2 md:px-6 2xl:px-11"
    >
      <!-- top right menu -->
      <div class="flex items-center">
        <!-- message btn -->
        <div class="relative">
          <button
            class="flex mx-2 items-center justify-center rounded-full bg-[#F1F1F2] p-3"
          >
            <div class="w-6 h-6">
              <icon-tag :name="'header-menu-message'"></icon-tag>
            </div>
          </button>
          <div class="absolute top-0 right-0">
            <p
              class="bg-main_color text-white text-center items-center text-sm w-5 h-5 rounded-full"
            >
              3
            </p>
          </div>
        </div>

        <!-- notifications btn -->
        <div class="relative">
          <button
            class="flex mx-2 items-center justify-center rounded-full bg-[#F1F1F2] p-3"
          >
            <div class="w-6 h-6">
              <icon-tag :name="'header-menu-notification'"></icon-tag>
            </div>
          </button>
          <div class="absolute top-0 right-0">
            <p
              class="bg-main_color text-white text-center items-center text-sm w-5 h-5 rounded-full"
            >
              5
            </p>
          </div>
        </div>

        <!-- User information btn-->
        <div class="relative mx-2">
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="relative z-10 w-12 h-12 block overflow-hidden rounded-full shadow focus:outline-none bg-gray-200"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Your avatar"
            />
          </button>

          <div
            v-show="dropdownOpen"
            @click="dropdownOpen = false"
            class="fixed inset-0 z-10 w-full h-full"
          ></div>

          <div
            v-show="dropdownOpen"
            class="absolute w-56 right-0 mt-5 bg-white rounded-md shadow-xl text-gray-500 text-left gap-4 border-b z-50"
          >
            <div class="px-8 py-4 border-b-[1px] border-gray-400 z-50">
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base mt-4"
              >
                <i class="fa-regular fa-user mr-2"></i>
                My Profile
              </a>
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base mt-4"
              >
                <i class="fa-regular fa-id-badge mr-2"></i>
                My Contacts
              </a>
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base mt-4"
              >
                <i class="fa-solid fa-gear mr-2"></i>
                Account Settings
              </a>
            </div>
            <div class="px-8 py-4">
              <button
                @click="logout()"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base"
              >
                <i class="fa-solid fa-right-from-bracket mr-2"></i> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import IconTag from "@/components/IconTag.vue";
export default {
  props: [""],
  components: { IconTag },
  data() {
    return {
      dropdownOpen: ref(false),
      isOpen: true,
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("AUTH/logout");
      this.$router.push({ name: "admin.login" });
    },
  },
};
</script>
