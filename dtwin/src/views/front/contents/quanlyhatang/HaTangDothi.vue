<template>
  <MainLayout class="h-full font-magistral" :page="'hatangdothi'">
    <map-view></map-view>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import MapView from "@/components/map/MapView.vue";
import emitter from "@/mitt";

import ENTITY_API from "@/apis/modules/entity";
import DTP_ENTITY from "@/DTP_JS/entity";
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";

import { mapGetters } from "vuex";
export default {
  props: [""],
  components: {
    MapView,
    MainLayout,
  },
  data() {
    return {
      entities: [],
      handle_click_object: null,
      handle_click_object_emit: "get-object-id-by-click",
    };
  },
  computed: {
    ...mapGetters(["VIEWER/getViewer"]),
  },
  async mounted() {
    DTP_HANDLE_ACTION.stop_handle(
      this["VIEWER/getViewer"].screenSpaceEventHandler
    );
    this.handle_click_object = DTP_HANDLE_ACTION.handle_click_object(
      this.handle_click_object_emit
    );
    await this.visualize_city_entities();
    emitter.on(this.handle_click_object_emit, (eventData) => {
      console.log("eventData: ", eventData);
      let info = ENTITY_API.getInfoDetail(eventData.obj_id);
      console.log(info);
    });
  },
  methods: {
    async visualize_city_entities() {
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

      // Visualization
      building_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      tree_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      streetLight_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      religion_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      carPark_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      bridge_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      construction_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      vehicle_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      good_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
      ship_entities.forEach((e) => {
        this.entities.push(DTP_ENTITY.model_entity(e));
      });
    },
  },
};
</script>
