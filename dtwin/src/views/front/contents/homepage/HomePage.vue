<template>
  <MainLayout class="h-full font-magistral">
    <MapView></MapView>
    <div
      class="absolute top-0 right-0 w-1/5 justify-start p-5 text-white text-base"
    >
      <tool-map :show="true"></tool-map>
    </div>
  </MainLayout>
</template>
<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import MapView from "@/components/map/MapView.vue";

import { mapGetters } from "vuex";
import DTP_ENTITY from "@/DTP_JS/entity";
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";
import DTP_CAMERA from "@/DTP_JS/camera";
import ToolMap from "@/components/map/ToolMap.vue";
export default {
  props: [""],
  components: {
    ToolMap,
    MapView,
    MainLayout,
  },
  data() {
    return {
      boundary_entity: null,
    };
  },
  computed: {
    ...mapGetters(["VIEWER/getViewer"]),
  },
  mounted() {
    DTP_HANDLE_ACTION.stop_handle(
      this["VIEWER/getViewer"].screenSpaceEventHandler
    );
    this.boundary_entity = DTP_ENTITY.load_entity_from_geo_json(
      "/Data/geoJson/ThuDuc_HC_Phuong.geojson",
      true
    );
    DTP_CAMERA.fly_to_ThuDuc();
  },
  methods: {},
};
</script>
