<template>
  <div class="w-full mt-2 px-4 py-1">
    <div class="flex justify-between items-center text-white">
      <p>{{ title }}</p>
      <div class="relative">
        <button
          type="button"
          class="w-4 h-6 z-40"
          @click="action_dropbox_show = true"
        >
          <icon-tag :name="'more'" v-if="!action_dropbox_show"></icon-tag>
          <icon-tag :name="'more'" class="text-red-600" v-else></icon-tag>
        </button>
        <div
          class="absolute top-0 left-0 w-[200px] mt-6 ml-[-14px] z-50"
          v-if="action_dropbox_show"
        >
          <message-drop-down @mouseleave="action_dropbox_show = false">
            <button type="button" class="mt-4 w-full">
              <div class="flex justify-start items-center gap-4">
                <div>
                  <button type="button" @click="status = !status">
                    <div class="w-6 h-3">
                      <icon-tag :name="'on-status'" v-if="status"></icon-tag>
                      <icon-tag :name="'off-status'" v-else></icon-tag>
                    </div>
                  </button>
                </div>
                <div class="text-white">Kích hoạt bản đồ</div>
              </div>
            </button>
            <button type="button" class="mt-4 w-full">
              <div class="flex justify-start items-center gap-4">
                <div class="w-6 h-6">
                  <icon-tag :name="'edit-map'"></icon-tag>
                </div>

                <div class="text-white">Chỉnh sửa bản đồ</div>
              </div>
            </button>
            <button type="button" class="mt-4 w-full">
              <div class="flex justify-start items-center gap-4">
                <div class="w-6 h-6">
                  <icon-tag :name="'red-delete'"></icon-tag>
                </div>

                <div class="text-white">Xóa bản đồ</div>
              </div>
            </button>
          </message-drop-down>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTag from "@/components/IconTag.vue";
import MessageDropDown from "@/components/box/messageDropDown.vue";

export default {
  props: ["title"],
  components: { MessageDropDown, IconTag },
  data() {
    return {
      show_drop_box: true,
      action_dropbox_show: false,
      status: true,
    };
  },
  methods: {
    click_event() {
      console.log("A");
    },
  },
};
</script>
