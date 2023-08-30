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
import HandleAction from "@/DtwinJs/handle_action";
import ENTITY_API from "@/apis/modules/entity";
import ENTITY_MODEL from "@/DtwinJs/entity_model";
export default {
  props: [],
  data() {
    return {
      viewer: null,
      entities: [],
    };
  },
  async mounted() {
    this.viewer = await Init.initCesium();
    HandleAction.start_left_click_object_handle(this.viewer);

    //let models = NewCityInitMap.visualize_models(this.viewer);
    //console.log(models);
    this.$emit("child-data", { viewer: this.viewer });
    await this.visualize_buildings();
    //await this.visualize_IOTLink_model();
    //console.log(this.entities);
  },
  methods: {
    async visualize_buildings() {
      let building_entities = await ENTITY_API.getAllEntities("building");
      let tree_entities = await ENTITY_API.getAllEntities("plant");
      let streetLight_entities = await ENTITY_API.getAllEntities("streetLight");
      let religion_entities = await ENTITY_API.getAllEntities("religion");
      let carPark_entities = await ENTITY_API.getAllEntities("carPark");
      let bridge_entities = await ENTITY_API.getAllEntities("bridge");
      let construction_entities = await ENTITY_API.getAllEntities(
        "construction"
      );
      let ship_entities = await ENTITY_API.getAllEntities("ship");
      let good_entities = await ENTITY_API.getAllEntities("goods");
      let vehicle_entities = await ENTITY_API.getAllEntities("vehicle");

      building_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      tree_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      streetLight_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      religion_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      carPark_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      bridge_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      construction_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      vehicle_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      good_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
      ship_entities.forEach((e) => {
        this.entities.push(ENTITY_MODEL.addModel(this.viewer, e));
      });
    },
    async visualize_IOTLink_model() {
      fetch("/Data/downloaded_ids.txt")
        .then((response) => response.text())
        .then((text) => {
          let arr = text.split("\n");
          arr = arr.slice(851, 900);
          arr.forEach((e) => {
            let id = e.trim();
            if (
              !this.entities.some((entity) => entity.name === id) &&
              id !== ""
            ) {
              let model = {
                longitude: 108.2316918,
                latitude: 16.0929782,
                height: 0,
                heading: 43,
                pitch: 0,
                roll: 0,
                id: id,
                modelUrl: id,
                scale: 0.8,
                color: 1,
              };
              this.entities.push(ENTITY_MODEL.addModel(this.viewer, model));
            }
          });
        });
    },
  },
};
</script>
