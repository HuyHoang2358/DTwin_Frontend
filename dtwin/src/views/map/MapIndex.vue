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
import Init from "@/DtwinJs/Init.js";

export default {
  mounted() {
    let viewer = Init.initCesium();
    console.log(viewer);
  },
  methods: {},
};
</script>
