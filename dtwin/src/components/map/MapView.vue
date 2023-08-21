<template>
  <div class="w-full h-full">
    <div
      id="cesiumContainer"
      ref="cesiumContainer"
      class="z-10 w-full h-[99%]"
    ></div>
  </div>
</template>
<script>
import DTP_INIT from "@/DTP_JS/init.js";

export default {
  props: [],
  data() {
    return {};
  },
  async mounted() {
    await DTP_INIT.initCesium();

    this.hidden_element_by_class_name("cesium-viewer-fullscreenContainer");
    this.hidden_element_by_class_name("cesium-viewer-animationContainer");
    this.hidden_element_by_class_name("cesium-viewer-toolbar");
    console.log("aa");
  },
  created() {},
  methods: {
    hidden_element_by_class_name(class_name) {
      let blocks = document.getElementsByClassName(class_name);
      for (let i = 0; i < blocks.length; i++) blocks[i].style.display = "none";
    },
  },
};
</script>
