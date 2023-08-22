<template>
  <MainLayout class="h-full font-magistral" :page="'tongquandothi'">
    <!--    <div class="h-full w-full bgg"></div>-->
    <MapView></MapView>
    <div
      class="absolute top-0 left-0 w-1/5 justify-start p-5 text-white text-lg"
    >
      <LeftBox :title="'Loại báo cáo'">
        <div class="flex justify-between font-magistral_medium">
          <div class="">Báo cáo tổng hợp</div>
          <div class="">Hiển thị</div>
        </div>
        <div class="font-magistral_l mt-4">
          <drop-down-box :title="'Chiều cao tòa nhà'"> </drop-down-box>
          <drop-down-box :title="'Phân loại tòa nhà'">
            <on-off-button
              :title="'Số lượng'"
              @click-button="onOff()"
            ></on-off-button>
            <on-off-button
              :title="'Diện tích'"
              @click-button="onOff()"
            ></on-off-button>
            <on-off-button
              :title="'Tỉ trọng'"
              @click-button="onOff()"
            ></on-off-button>
          </drop-down-box>
          <drop-down-box :title="null">
            <on-off-button
              :title="'Số lượng nhà vi phạm'"
              @click-button="onOff()"
            ></on-off-button>
          </drop-down-box>
          <drop-down-box :title="null">
            <on-off-button
              :title="'Không gian xanh'"
              @click-button="onOff()"
            ></on-off-button>
          </drop-down-box>
          <drop-down-box :title="'Phân loại cây xanh'">
            <on-off-button
              :title="'Số lượng'"
              @click-button="onOff()"
            ></on-off-button>
            <on-off-button
              :title="'Diện tích'"
              @click-button="onOff()"
            ></on-off-button>
            <on-off-button
              :title="'Tỉ trọng'"
              @click-button="onOff()"
            ></on-off-button>
          </drop-down-box>
          <div class="w-full mt-8">
            <div class="flex justify-end gap-4">
              <gray-button
                :title="'Hủy bỏ'"
                @click-button="cancel()"
              ></gray-button>
              <red-button
                :title="'Lưu lại'"
                @click-button="submit()"
              ></red-button>
            </div>
          </div>
        </div>
      </LeftBox>
    </div>

    <div
      class="absolute top-0 right-0 w-1/5 justify-start p-5 text-white text-lg"
    >
      <ToolMap></ToolMap>
    </div>
  </MainLayout>
</template>
<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import LeftBox from "@/components/box/LeftBox.vue";
import DropDownBox from "@/components/box/DropDownBox.vue";
import OnOffButton from "@/components/buttons/OnOffButton.vue";
import RedButton from "@/components/buttons/RedButton.vue";
import GrayButton from "@/components/buttons/GrayButton.vue";
import ToolMap from "@/components/map/ToolMap.vue";
import MapView from "@/components/map/MapView.vue";

import { mapGetters, mapActions } from "vuex";
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";
import DTP_ENTITY from "@/DTP_JS/entity";
import emitter from "@/mitt";
import { saveAs } from "file-saver";
export default {
  props: [""],
  components: {
    MapView,
    ToolMap,
    GrayButton,
    RedButton,
    OnOffButton,
    DropDownBox,
    LeftBox,
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
      GeoJsonDataFormat: {
        type: "FeatureCollection",
        name: "DaNang_SonTra_NaiHienDong",
        crs: {
          type: "name",
          properties: {
            name: "urn:ogc:def:crs:OGC:1.3:CRS84",
          },
        },
        features: [
          {
            type: "Feature",
            properties: {
              maTinh: "79",
              tenTinh: "Thành phố Hồ Chí Minh",
              maHuyen: "769",
              tenHuyen: "thành phố Thủ Đức",
            },
            geometry: {
              type: "MultiPolygon",
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
        ],
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
  mounted() {
    DTP_HANDLE_ACTION.stop_handle(
      this["VIEWER/getViewer"].screenSpaceEventHandler
    );
    console.log("mounted tongquan");
    this.init_handle();
    this.$store.dispatch("POLYGON/clearPoints");

    let surface_entity = DTP_ENTITY.load_entity_from_geo_json(
      "./Data/geoJson/DaNang_SonTra_NaiHienDong.json"
    );
    console.log(surface_entity);
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
    onOff() {
      console.log("on -off");
    },
    cancel() {
      console.log("cancel");
    },
    submit() {
      console.log("submit");
    },
    initGeoJson() {
      let points = this["POLYGON/getPoints"];
      for (let i = 0; i < Math.floor(points.length / 2); i++) {
        this.GeoJsonDataFormat.features[0].geometry.coordinates[0][0].push([
          points[i * 2],
          points[i * 2 + 1],
        ]);
      }
      console.log(this.GeoJsonDataFormat);
      const jsonData = JSON.stringify(this.GeoJsonDataFormat, null, 4);
      // Tạo một đối tượng Blob từ chuỗi JSON
      const blob = new Blob([jsonData], { type: "application/json" });
      // Sử dụng thư viện file-saver để lưu đối tượng Blob thành file JSON
      saveAs(blob, "geojson.json");
    },
  },
};
</script>
