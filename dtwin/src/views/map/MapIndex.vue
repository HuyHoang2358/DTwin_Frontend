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
import NewCityInitMap from "@/new_city/init_map";
import HandleAction from "@/DtwinJs/handle_action";
export default {
  props: [],
  data() {
    return {
      viewer: null,
    };
  },
  async mounted() {
    this.viewer = await Init.initCesium();
    await NewCityInitMap.init_new_city_map(this.viewer);
    HandleAction.handle_click_object(this.viewer);
    let models = await NewCityInitMap.visualize_models(this.viewer);
    this.$emit("child-data", { viewer: this.viewer, models: models });
  },
  methods: {},
};
</script>
