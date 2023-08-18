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
            @click="drop_down = 'chat'"
            class="flex mx-2 items-center justify-center rounded-full bg-[#F1F1F2] p-3"
          >
            <div class="w-4 h-4">
              <icon-tag :name="'header-menu-message'"></icon-tag>
            </div>
          </button>
          <!--          <div class="absolute top-0 right-0">
            <p
              class="bg-main_color text-white text-center items-center text-sm w-5 h-5 rounded-full"
            >
              3
            </p>
          </div>-->
        </div>

        <!-- notifications btn -->
        <div class="relative">
          <button
            @click="drop_down = 'notification'"
            class="flex mx-2 items-center justify-center rounded-full bg-[#F1F1F2] px-3 py-2"
          >
            <div class="w-4 h-6">
              <icon-tag :name="'header-menu-notification'"></icon-tag>
            </div>
          </button>
          <!--          <div class="absolute top-0 right-0">
            <p
              class="bg-main_color text-white text-center items-center text-sm w-5 h-5 rounded-full"
            >
              5
            </p>
          </div>-->
        </div>

        <!-- User information btn-->
        <div class="relative mx-2">
          <button
            @click="drop_down = 'user-info'"
            class="relative z-10 w-10 h-10 block overflow-hidden rounded-full shadow focus:outline-none bg-gray-200"
          >
            <img
              class="object-cover w-full h-full"
              src="/images/avatar/admin.jpg"
              alt="admin-img"
            />
          </button>
        </div>
      </div>
    </div>
    <chat-drop-down
      v-if="drop_down === 'chat'"
      v-on:mouseleave="drop_down = ''"
    ></chat-drop-down>
    <notification-drop-down
      v-if="drop_down === 'notification'"
      v-on:mouseleave="drop_down = ''"
    ></notification-drop-down>
    <user-information-drop-down
      v-if="drop_down === 'user-info'"
      v-on:mouseleave="drop_down = ''"
    ></user-information-drop-down>
  </header>
</template>

<script>
import IconTag from "@/components/IconTag.vue";
import ChatDropDown from "@/views/admin/partials/ChatDropDown.vue";
import NotificationDropDown from "@/views/admin/partials/NotificationDropDown.vue";
import UserInformationDropDown from "@/views/admin/partials/UserInformationDropDown.vue";
export default {
  props: [""],
  components: {
    UserInformationDropDown,
    NotificationDropDown,
    ChatDropDown,
    IconTag,
  },
  data() {
    return {
      drop_down: "",
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
