<template>
  <div class="w-full">
    <right-box :title="'Công cụ bản đồ'" :is_show="show">
      <div class="flex justify-center gap-2">
        <ToolItemButton
          :icon="null"
          :text="'3D'"
          :toolTip="'Hiển thị 3D'"
          :active="false"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'add'"
          :text="null"
          :toolTip="'Phóng to'"
          @click-button="zoomInMap()"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'minus'"
          :text="null"
          :toolTip="'Thu nhỏ'"
          @click-button="zoomOutMap()"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'full-screen'"
          :text="null"
          :toolTip="'Toàn màn hình'"
          @click-button="openFullScreen()"
          v-if="!is_full_screen"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'full-screen'"
          :text="null"
          :toolTip="'Thoát'"
          @click-button="exitFullScreen()"
          v-else
        ></ToolItemButton>
        <ToolItemButton
          :icon="'shadow'"
          :text="null"
          :toolTip="'Đổ bóng'"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'address'"
          :text="null"
          :toolTip="'Vị trí của bạn'"
          @click-button="show_camera_position()"
        ></ToolItemButton>
      </div>
    </right-box>
  </div>
</template>

<script>
import ToolItemButton from "@/components/map/ToolItemButton.vue";
import DTP_CAMERA from "@/DTP_JS/camera";

import RightBox from "@/components/box/RightBox.vue";
export default {
  props: ["show"],
  components: { RightBox, ToolItemButton },
  data() {
    return {
      is_full_screen: false,
      tool_map_show: this.show,
    };
  },
  methods: {
    clickC() {
      console.log("www");
    },
    show_camera_position() {
      let position = DTP_CAMERA.show_camera_position();
      console.log("show_camera_position:", position);
    },
    zoomInMap() {
      DTP_CAMERA.zoom_in_map(1000);
    },
    zoomOutMap() {
      DTP_CAMERA.zoom_out_map(1000);
    },
    openFullScreen() {
      this.is_full_screen = true;
      DTP_CAMERA.turn_on_fullscreen();
    },
    exitFullScreen() {
      this.is_full_screen = false;
      DTP_CAMERA.exit_fullscreen();
    },
  },
};
</script>
