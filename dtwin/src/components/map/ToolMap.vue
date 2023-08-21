<template>
  <div class="w-full">
    <LeftBox :title="'Công cụ'">
      <div class="flex justify-center gap-2">
        <ToolItemButton
          :icon="null"
          :text="'3D'"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'add'"
          :text="null"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'minus'"
          :text="null"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'full-screen'"
          :text="null"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'shadow'"
          :text="null"
          @click-button="clickC"
        ></ToolItemButton>
        <ToolItemButton
          :icon="'address'"
          :text="null"
          @click-button="clickC"
        ></ToolItemButton>
      </div>
    </LeftBox>
  </div>
</template>

<script>
import LeftBox from "@/components/box/LeftBox.vue";
import ToolItemButton from "@/components/map/ToolItemButton.vue";

export default {
  props: ["title"],
  components: { ToolItemButton, LeftBox },
  data() {
    return {};
  },
  methods: {
    clickC() {
      console.log("www");
    },
  },
};
</script>
