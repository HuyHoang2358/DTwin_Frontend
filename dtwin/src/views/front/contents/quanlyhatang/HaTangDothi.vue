<template>
  <MainLayout class="h-full font-magistral" :page="'hatangdothi'">
    <map-view></map-view>
    <div class="absolute top-0 left-0 w-1/5 justify-start p-5">
      <div v-if="edit_button_show">
        <button
          class="bg-[#C80F36] px-2 py-1 flex justify-center items-center text-white"
          v-if="!buildingInfoBox_show"
          @click="buildingInfoBox_show = true"
        >
          <div class="w-10 h-10 p-3">
            <icon-tag :name="'edit'"></icon-tag>
          </div>
          <p>Chỉnh sửa</p>
        </button>
      </div>

      <LeftBox
        :title="'Chỉnh sửa thông tin'"
        v-if="buildingInfoBox_show"
        @hidden-box="buildingInfoBox_show = false"
      >
        <BuildingEntityForm
          :entityInfo="selectedBuilding"
          :isEditForm="is_edit_form"
          @submit-form="submitForm"
          @close-form="closeForm"
        ></BuildingEntityForm>
      </LeftBox>
    </div>
    <div
      class="absolute top-0 right-0 w-1/5 justify-start p-5 text-white text-lg"
    >
      <ToolMap :show="true"></ToolMap>
      <tree-manager :show="true"></tree-manager>
      <building-manager :show="true"> </building-manager>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import MapView from "@/components/map/MapView.vue";
import emitter from "@/mitt";

import ENTITY_API from "@/apis/modules/entity";
import DTP_ENTITY from "@/DTP_JS/entity";
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";
import DTP_CAMERA from "@/DTP_JS/camera";
import DTP_MAP from "@/DTP_JS/map";
import { mapGetters } from "vuex";
import LeftBox from "@/components/box/LeftBox.vue";
import BuildingEntityForm from "@/components/forms/BuildingEntityForm.vue";
import IconTag from "@/components/IconTag.vue";
import ToolMap from "@/components/map/ToolMap.vue";
import TreeManager from "@/views/front/contents/quanlyhatang/TreeManager.vue";
import BuildingManager from "@/views/front/contents/quanlyhatang/BuildingManager.vue";
export default {
  props: [""],
  components: {
    BuildingManager,
    TreeManager,
    ToolMap,
    IconTag,
    BuildingEntityForm,
    LeftBox,
    MapView,
    MainLayout,
  },
  data() {
    return {
      entities: [],
      nameOverLay: null,
      handle_click_object: null,
      buildingInfoBox_show: false,
      edit_button_show: false,
      is_edit_form: null,
      selectedBuilding: this.initNewModelInfo(),
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
    DTP_MAP.open_openstreetmap();
    this.nameOverLay = DTP_HANDLE_ACTION.createNameOverLay();
    console.log(this.nameOverLay);
    this.handle_click_object = DTP_HANDLE_ACTION.handle_click_object(
      this.nameOverLay,
      this.handle_click_object_emit
    );
    /*this.handle_click_object = DTP_HANDLE_ACTION.handel_move_and_click_object(
      this.handle_click_object_emit
    );*/
    await this.visualize_city_entities();
    DTP_CAMERA.fly_to_NewCity();
    emitter.on(this.handle_click_object_emit, async (eventData) => {
      //console.log("eventData: ", eventData);
      let info = await ENTITY_API.getInfoDetail(eventData.obj_id);
      console.log(info);
      if (info.ten_toa_nha === null) {
        // open add form
        //console.log("add form");
        this.addModelInformation(info);
      } else {
        // open edit form
        //console.log("edit form");
        this.editModelInformation(info);
      }
    });
  },
  methods: {
    initNewModelInfo() {
      return {
        id: null,
        ten_toa_nha: null,
        dien_tich: null,
        so_tang: null,
        dia_chi: {
          commune: null,
          district: null,
          province: null,
          streetAddress: null,
        },
        dia_chi_thua_dat: null,
        ngay_hoan_thanh: null,
        ngay_xay_dung: null,
        duoc_cap_phep: null,
        mat_do: null,
        type: null,
      };
    },
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

      console.log(building_entities);
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
    editModelInformation(model_information) {
      this.is_edit_form = true;
      this.selectedBuilding = model_information;
      //console.log(this.selectedBuilding);
      this.edit_button_show = true;
    },
    addModelInformation(model_information) {
      this.is_edit_form = false;
      this.selectedBuilding = model_information;
      //console.log(this.selectedBuilding);
      this.edit_button_show = true;
    },
    async submitForm(data) {
      //console.log("submit form", data);
      await ENTITY_API.updateEntity(data);
      //console.log(response);
    },
    closeForm() {
      this.buildingInfoBox_show = false;
      this.edit_button_show = false;
    },
  },
};
</script>
