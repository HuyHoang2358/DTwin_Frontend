<template>
  <drop-down :title="'Thông tin cá nhân'">
    <div class="w-full">
      <div
        class="mt-4"
        v-for="(menu, index) in menus"
        :key="`user-info-drop-down-${index}`"
      >
        <RouterLink to="#" class="w-full">
          <div class="w-full flex justify-start items-center gap-4">
            <div class="flex w-12 h-12">
              <div class="w-full h-full bg-[#F8F8F8] rounded-full p-3">
                <icon-tag :name="menu.icon_name"></icon-tag>
              </div>
            </div>
            <div class="flex-grow">
              <p class="font-bold text-[#201C1D] text-lg text-left">
                {{ menu.name }}
              </p>
            </div>
            <div class="flex w-2 mr-2">
              <icon-tag :name="'chevron-right'"></icon-tag>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="mt-4">
        <button class="w-full" @click="logout()">
          <div class="w-full flex justify-start items-center gap-4">
            <div class="flex w-12 h-12">
              <div class="w-full h-full bg-[#F8F8F8] rounded-full p-3">
                <icon-tag :name="'red-logout'"></icon-tag>
              </div>
            </div>
            <div class="flex-grow">
              <p class="font-bold text-[#201C1D] text-lg text-left">
                Đăng xuất
              </p>
            </div>
            <div class="flex w-2 mr-2">
              <icon-tag :name="'chevron-right'"></icon-tag>
            </div>
          </div>
        </button>
      </div>
    </div>
  </drop-down>
</template>

<script>
import DropDown from "@/components/DropDown.vue";

import IconTag from "@/components/IconTag.vue";

export default {
  props: [""],
  components: { IconTag, DropDown },
  data() {
    return {
      menus: [
        {
          name: "Đổi mật khẩu",
          route_name: "admin.index",
          icon_name: "red-lock",
        },
        {
          name: "Cài đặt",
          route_name: "admin.index",
          icon_name: "red-setting",
        },
      ],
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("AUTH/logout");
      this.$router.push({ name: "auth.login" });
    },
  },
};
</script>
