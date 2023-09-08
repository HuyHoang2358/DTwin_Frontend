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
import DTP_HANDLE_ACTION from "@/DTP_JS/handle_action";
import DTP_CONTROLLER from "@/DTP_JS/controller";

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

    DTP_CONTROLLER.open3D();

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
