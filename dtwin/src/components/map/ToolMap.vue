<template>
  <div class="w-full">
    <div class="flex justify-end">
      <button
        class="w-10 h-10 bg-[#C80F36] p-3 flex justify-center items-center"
        v-if="!tool_map_show"
        @click="tool_map_show = !tool_map_show"
      >
        <icon-tag :name="'double-chevron-left'"></icon-tag>
      </button>
    </div>

    <LeftBox
      :title="'Công cụ bản đồ'"
      v-if="tool_map_show"
      @hidden-box="tool_map_show = !tool_map_show"
    >
      <div class="flex justify-center gap-2">
        <ToolItemButton
          :icon="null"
          :text="'3D'"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'add'"
          :text="null"
          @click-button="zoomInMap()"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'minus'"
          :text="null"
          @click-button="zoomOutMap()"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'full-screen'"
          :text="null"
          @click-button="openFullScreen()"
          v-if="!is_full_screen"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'full-screen'"
          :text="null"
          @click-button="exitFullScreen()"
          v-else
        ></ToolItemButton>
        <ToolItemButton
          :icon="'shadow'"
          :text="null"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'address'"
          :text="null"
          @click-button="show_camera_position()"
        ></ToolItemButton>
      </div>
    </LeftBox>
  </div>
</template>

<script>
import LeftBox from "@/components/box/LeftBox.vue";
import ToolItemButton from "@/components/map/ToolItemButton.vue";
import DTP_CAMERA from "@/DTP_JS/camera";
import IconTag from "@/components/IconTag.vue";
export default {
  props: ["show"],
  components: { IconTag, ToolItemButton, LeftBox },
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
