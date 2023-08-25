<template>
  <MainLayout class="h-full font-magistral">
    <MapView></MapView>
  </MainLayout>
</template>
<script>
import MainLayout from "@/views/front/layouts/MainLayout";

import MapView from "@/components/map/MapView.vue";

import { mapActions, mapGetters } from "vuex";
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";
import DTP_ENTITY from "@/DTP_JS/entity";
import emitter from "@/mitt";
import axios from "axios";

export default {
  props: [""],
  components: {
    MapView,
    MainLayout,
  },
  data() {
    return {
      handle_click_get_position: null,
      handle_click_get_position_emit: "get-position-by-click",
      handle_move_get_position: null,
      handle_move_get_position_emit: "get-position-by-move",
      polygon_entity: null,
      endPoint: null,
      movingPoint: null,
      data_thua_dat: null,
      num_thua_dat: 0,
      feature_item: {
        type: "Feature",
        properties: {
          FID: "",
          id_thua_dat: "",
          phan_loai: "",
          address: "",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [
                //[106.840192623351072, 10.898778743370588],
                //[106.840439149629731, 10.898089127944202],
              ],
            ],
          ],
        },
      },
    };
  },
  computed: {
    ...mapGetters([
      "VIEWER/getViewer",
      "POLYGON/getPoints",
      "POLYGON/getEndPoint",
    ]),
  },
  created() {
    this.get_data();
  },
  mounted() {
    DTP_HANDLE_ACTION.stop_handle(
      this["VIEWER/getViewer"].screenSpaceEventHandler
    );
    this.init_handle();
    this.$store.dispatch("POLYGON/clearPoints");

    /* let surface_entity = DTP_ENTITY.load_entity_from_geo_json(
      "/Data/geoJson/thuadat.json"
    );
    console.log(surface_entity);*/
    emitter.on(this.handle_move_get_position_emit, async (eventData) => {
      //console.log("eventData: ", eventData);
      if (this.movingPoint === null) {
        this.movingPoint = DTP_ENTITY.point_entity(eventData["point"]);
      } else {
        DTP_ENTITY.update_point_entity(this.movingPoint, eventData["point"]);
      }
      if (this.polygon_entity !== null) {
        DTP_ENTITY.update_polygon_entity(this.polygon_entity, [
          ...this["POLYGON/getPoints"],
          eventData["point"].longitude,
          eventData["point"].latitude,
        ]);
      }
    });
    emitter.on(this.handle_click_get_position_emit, async (eventData) => {
      if (!eventData["status_end"]) {
        this.$store.dispatch("POLYGON/addPoint", eventData.point.longitude);
        this.$store.dispatch("POLYGON/addPoint", eventData.point.latitude);
        //console.log("store, polygon: ", this["POLYGON/getPoints"]);
        //console.log("store, getEndPoint: ", this["POLYGON/getEndPoint"]);
        if (this.polygon_entity === null) {
          this.polygon_entity = DTP_ENTITY.polygon_entity(
            this["POLYGON/getPoints"]
          );
          this.point_entity = DTP_ENTITY.point_entity(
            this["POLYGON/getEndPoint"]
          );
        } else
          DTP_ENTITY.update_polygon_entity(
            this.polygon_entity,
            this["POLYGON/getPoints"]
          );
        DTP_ENTITY.update_point_entity(
          this.point_entity,
          this["POLYGON/getEndPoint"]
        );
      } else {
        console.log("store, polygon: ", this["POLYGON/getPoints"]);
        DTP_HANDLE_ACTION.stop_handle(this.handle_move_get_position);
        this["VIEWER/getViewer"].entities.remove(this.endPoint);
        this["VIEWER/getViewer"].entities.remove(this.movingPoint);
        DTP_ENTITY.update_polygon_entity(
          this.polygon_entity,
          this["POLYGON/getPoints"]
        );
        this.initGeoJson();
      }
    });
  },
  methods: {
    ...mapActions(["POLYGON/addPoint", "POLYGON/clearPoints"]),
    get_data() {
      axios.get("/Data/geoJson/thuadat.json").then((response) => {
        this.data_thua_dat = response.data;
        this.num_thua_dat = this.data_thua_dat.features.length;
      });
    },
    init_handle() {
      this.handle_click_get_position =
        DTP_HANDLE_ACTION.handle_click_get_position(
          this.handle_click_get_position_emit
        );
      this.handle_move_get_position =
        DTP_HANDLE_ACTION.handle_move_get_position(
          this.handle_move_get_position_emit
        );
    },
    initGeoJson() {
      let points = this["POLYGON/getPoints"];
      this.feature_item.properties.FID = this.num_thua_dat + 1;
      this.feature_item.properties.id_thua_dat = this.num_thua_dat + 1;
      this.feature_item.properties.phan_loai = 0;

      for (let i = 0; i < Math.floor(points.length / 2); i++) {
        this.feature_item.geometry.coordinates[0][0].push([
          points[i * 2],
          points[i * 2 + 1],
        ]);
      }
      this.data_thua_dat.features.push(this.feature_item);
      console.log(this.feature_item);
      console.log(this.data_thua_dat);
      this.updateJSONFile();
    },
    updateJSONFile() {
      console.log(this.data_thua_dat);
      this.init_handle();
      this.$store.dispatch("POLYGON/clearPoints");
      this.polygon_entity = null;
      this.endPoint = null;
      this.movingPoint = null;
    },
  },
};
</script>
