<template>
  <MainLayout class="h-full font-magistral">
    <!--    <div class="h-full w-full bgg"></div>-->
    <MapView></MapView>

    <div
      class="absolute top-0 right-0 w-1/5 justify-start p-5 text-white text-lg"
    >
      <ToolMap></ToolMap>
    </div>
  </MainLayout>
</template>
<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import ToolMap from "@/components/map/ToolMap.vue";
import MapView from "@/components/map/MapView.vue";

import { mapGetters } from "vuex";
import DTP_ENTITY from "@/DTP_JS/entity";
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";

export default {
  props: [""],
  components: {
    MapView,
    ToolMap,
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
      "/Data/geoJson/DaNang_SonTra_NaiHienDong.json"
    );
    console.log(this.boundary_entity);
  },
  methods: {},
};
</script>
