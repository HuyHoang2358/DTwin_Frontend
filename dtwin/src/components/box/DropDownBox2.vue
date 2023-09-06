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
          <icon-tag :name="'more'"></icon-tag>
        </button>
        <div
          class="absolute top-0 left-0 w-[200px] mt-6 ml-[-14px] z-50"
          v-if="action_dropbox_show"
        >
          <message-drop-down @mouseleave="action_dropbox_show = false">
            <button type="button" class="mt-4 w-full">
              <div class="flex justify-start items-center gap-4">
                <div class="w-8 h-6 ml-[-10px]">
                  <input
                    class="h-3.5 w-6 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#00A843] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#00A843] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-[#00A843] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked
                  />
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
    };
  },
  methods: {
    click_event() {
      console.log("A");
    },
  },
};
</script>
