<template>
  <MainLayout class="h-full font-magistral">
    <!--    <div class="h-full w-full bgg"></div>-->
    <MapView></MapView>
    <div
      class="absolute top-0 left-0 w-1/5 justify-start p-5 text-white text-base"
    >
      <LeftBox :title="'Loại báo cáo'" :is_show="true">
        <div class="flex justify-between items-center font-sarabun_bold">
          <div class="">Báo cáo tổng hợp</div>
          <div class="">Hiển thị</div>
        </div>
        <div class="font-sarabun_extra_light mt-4">
          <drop-down-box
            :title="'Chiều cao tòa nhà'"
            :icon="null"
            :have_body="false"
          >
          </drop-down-box>

          <drop-down-box
            :title="'Phân loại tòa nhà'"
            :icon="null"
            :have_body="true"
          >
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

          <drop-down-box :title="null" :icon="null" :have_body="true">
            <on-off-button
              :title="'Số lượng nhà vi phạm'"
              @click-button="onOff()"
            ></on-off-button>
          </drop-down-box>

          <drop-down-box :title="null" :icon="null" :have_body="true">
            <on-off-button
              :title="'Không gian xanh'"
              @click-button="onOff()"
            ></on-off-button>
          </drop-down-box>

          <drop-down-box
            :title="'Phân loại cây xanh'"
            :icon="null"
            :have_body="true"
          >
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

          <div class="w-full mt-6">
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
      class="absolute top-0 right-0 w-1/5 justify-start p-5 text-white text-base"
    >
      <ToolMap :show="true"></ToolMap>
      <city-overview :show="true"></city-overview>
      <city-popular :show="true"></city-popular>
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
import OnOffButton from "@/components/buttons/OnOffButton.vue";
import RedButton from "@/components/buttons/RedButton.vue";
import GrayButton from "@/components/buttons/GrayButton.vue";
import LeftBox from "@/components/box/LeftBox.vue";
import DropDownBox from "@/components/box/DropDownBox.vue";
import DTP_CAMERA from "@/DTP_JS/camera";
import CityOverview from "@/views/front/contents/tongquandothi/CityOverview.vue";
import CityPopular from "@/views/front/contents/tongquandothi/CityPopular.vue";

export default {
  props: [""],
  components: {
    CityPopular,
    CityOverview,
    DropDownBox,
    LeftBox,
    GrayButton,
    RedButton,
    OnOffButton,
    MapView,
    ToolMap,
    MainLayout,
  },
  data() {
    return {
      boundary_entity: null,
      left_box_show: true,
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
      //"/Data/geoJson/DaNang_SonTra_NaiHienDong.json"
      "/Data/geoJson/ThuDuc_HC_Phuong.geojson"
    );
    DTP_CAMERA.fly_to_ThuDuc();
  },
  methods: {
    onOff() {
      console.log("on -off");
    },
    cancel() {
      console.log("cancel");
      this.left_box_show = false;
    },
    submit() {
      console.log("submit");
      this.left_box_show = false;
    },
  },
};
</script>
