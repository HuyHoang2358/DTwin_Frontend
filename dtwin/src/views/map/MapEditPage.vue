<template>
  <MainLayout>
    <div class="w-full h-full">
      <MapIndex @child-data="receiveDataFromChild"></MapIndex>
      <div class="absolute top-0 left-0 w-1/3 justify-start p-5">
        <LeftBox :title="'Thông tin mô hình'" v-show="editForm">
          <ModelPositionForm
            :model="model"
            @submit-form="update_position_model"
            @change-position="change_position_model"
            @close-edit-form="editForm = false"
          ></ModelPositionForm>
        </LeftBox>
      </div>
      <div class="absolute top-0 right-0 w-1/4 justify-start mt-10 p-2 h-full">
        <LeftBox :title="'Thêm mô hình'">
          <select
            v-model="adding_model_type"
            @change="change_adding_model_type()"
            class="w-full"
          >
            <option
              :value="type_mode.id"
              v-for="type_mode in object_types"
              :key="type_mode.id"
            >
              {{ type_mode.name }}
            </option>
          </select>
          <div class="w-full">
            <div class="grid grid-cols-3 gap-4 mt-4 overflow-auto">
              <div
                class="w-full"
                v-for="sample in models_show"
                :key="sample.id"
              >
                <img
                  class="w-full h-24 hover:border-2 hover:border-red-500"
                  :src="`/samples/models/${sample.preview_img}.png`"
                  alt=""
                  @click="add_new_model(sample)"
                />
              </div>
            </div>
          </div>
        </LeftBox>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import LeftBox from "@/components/box/LeftBox.vue";
import ModelPositionForm from "@/components/forms/ModelPositionForm.vue";
import MapIndex from "@/views/map/MapIndex.vue";
import emitter from "@/mitt";
import ENTITY_MODEL from "@/DtwinJs/entity_model";
//import ENTITY_API from "@/apis/modules/entity";
import HANDLE_ACTION from "@/DtwinJs/handle_action";
import ENTITY_API from "@/apis/modules/entity";
export default {
  props: [""],
  components: { MapIndex, ModelPositionForm, LeftBox, MainLayout },
  data() {
    return {
      adding_model_type: "building",
      models_library: [
        {
          modelId: "5b1a5a2e1c21e330bca3ef9d",
          preview_img: "5b1a5a2e1c21e330bca3ef9d",
          type: "building",
        },
        {
          modelId: "5eb8be8e1128d113bc24ab43",
          preview_img: "5eb8be8e1128d113bc24ab43",
          type: "building",
        },
        {
          modelId: "5eb8be8e1128d113bc24ab41",
          preview_img: "5eb8be8e1128d113bc24ab41",
          type: "building",
        },
        {
          modelId: "5b1a5a721c21e330bca3efbf",
          preview_img: "5b1a5a721c21e330bca3efbf",
          type: "plant",
        },
        {
          modelId: "6086768113454c447c4a6fb7",
          preview_img: "6086768113454c447c4a6fb7",
          type: "plant",
        },

        {
          modelId: "5b7bcdf937e3d03be817444e",
          preview_img: "5b7bcdf937e3d03be817444e",
          type: "building",
        },
        {
          modelId: "5b1754daeeac643c0cdaf7ca",
          preview_img: "5b1754daeeac643c0cdaf7ca",
          type: "building",
        },
        {
          modelId: "5bb6ecd22c883d229463c809",
          preview_img: "5bb6ecd22c883d229463c809",
          type: "building",
        },
        {
          modelId: "5bef82ff73eb0522f8df89b4",
          preview_img: "5bef82ff73eb0522f8df89b4",
          type: "building",
        },
        {
          modelId: "5c56b00d19358e0c30dbca82",
          preview_img: "5c56b00d19358e0c30dbca82",
          type: "building",
        },
        {
          modelId: "5eb8fa421128d113bc24ab7e",
          preview_img: "5eb8fa421128d113bc24ab7e",
          type: "ship",
        },
        {
          modelId: "5eb8fa421128d113bc24ab7f",
          preview_img: "5eb8fa421128d113bc24ab7f",
          type: "ship",
        },
        {
          modelId: "5eb8fa421128d113bc24ab86",
          preview_img: "5eb8fa421128d113bc24ab86",
          type: "ship",
        },
        {
          modelId: "5b2365f0c4f5601100e58b57",
          preview_img: "5b2365f0c4f5601100e58b57",
          type: "streetLight",
        },
        {
          modelId: "6086350f10b9793609a8a8c0",
          preview_img: "6086350f10b9793609a8a8c0",
          type: "carPark",
        },
        {
          modelId: "6086350f10b9793609a8a8c3",
          preview_img: "6086350f10b9793609a8a8c3",
          type: "carPark",
        },
        {
          modelId: "5bef8dff73eb0522f8df89d7",
          preview_img: "5bef8dff73eb0522f8df89d7",
          type: "building",
        },
        {
          modelId: "633bf4de0d3b63a338156f28",
          preview_img: "633bf4de0d3b63a338156f28",
          type: "construction",
        },

        {
          modelId: "633cfc080d3b63a338156fab",
          preview_img: "633cfc080d3b63a338156fab",
          type: "vehicle",
        },
        {
          modelId: "633cfc080d3b63a338156faf",
          preview_img: "633cfc080d3b63a338156faf",
          type: "vehicle",
        },
        {
          modelId: "633d2de30d3b63a33815709f",
          preview_img: "633d2de30d3b63a33815709f",
          type: "vehicle",
        },
        {
          modelId: "637efa324f7f478847b0ca59",
          preview_img: "637efa324f7f478847b0ca59",
          type: "vehicle",
        },
      ],
      object_types: [
        {
          id: "building",
          name: "tòa nhà",
        },
        {
          id: "landUse",
          name: "đất",
        },
        {
          id: "streetLight",
          name: "đèn giao thông",
        },
        {
          id: "plant",
          name: "cây cối",
        },
        {
          id: "construction",
          name: "công trình xây dựng",
        },
        {
          id: "bridge",
          name: "cầu",
        },
        {
          id: "tunnel",
          name: "hầm",
        },
        {
          id: "waterPipe",
          name: "Đường ống nước",
        },
        {
          id: "road",
          name: "đường đi",
        },
        {
          id: "ship",
          name: "tàu thuyền",
        },
        {
          id: "goods",
          name: "Hàng hóa",
        },
        {
          id: "park",
          name: "công viên",
        },
        {
          id: "religion",
          name: "Cơ sở tín ngưỡng",
        },
        {
          id: "vehicle",
          name: "phương tiện giao thông",
        },
        {
          id: "carPark",
          name: "bãi đỗ xe",
        },
      ],
      models_show: [],
      entity: null,
      editForm: false,
      viewer: null,
      updateEntity: false,
      models: [],
      model: {
        longitude: 0,
        latitude: 0,
        height: 0,
        heading: 43,
        pitch: 0,
        roll: 0,
        scale: 1,
        id: "123456",
        modelUrl: "",
        type: "building",
      },
    };
  },
  mounted() {
    // Listen for the 'cesiumClick' event on the event bus
    emitter.on("show-edit-form", async (eventData) => {
      this.editForm = true;
      this.entity = eventData["entity"];
      let tmp = await ENTITY_API.getEntityInfo(this.entity.name);
      this.updateEntity = tmp !== null;
      HANDLE_ACTION.start_handle_move_object(this.viewer);
    });
  },
  created() {
    this.change_adding_model_type();
  },
  methods: {
    change_adding_model_type() {
      this.models_show = this.models_library.filter(
        (e) => e.type === this.adding_model_type
      );
    },
    add_new_model(sample) {
      console.log(sample);
      this.editForm = true;
      let new_entity_info = {
        longitude: 108.232847,
        latitude: 16.0960782,
        height: 0,
        heading: 43,
        pitch: 0,
        roll: 0,
        scale: 80,
        color: 1,
        id: [...Array(24)].map(() => Math.random().toString(36)[2]).join(""),
        modelUrl: sample.modelId,
        type: sample.type,
      };
      let new_entity = ENTITY_MODEL.addModel(this.viewer, new_entity_info);
      emitter.emit("entity-form-info", {
        entity: new_entity,
        entity_info: new_entity_info,
      });

      this.entity = new_entity;
      this.updateEntity = false;
      //this.models_show = [];
      HANDLE_ACTION.start_handle_move_object(this.viewer);
    },
    receiveDataFromChild(data) {
      this.viewer = data.viewer;
      this.models = data.models;
    },
    update_position_model(data) {
      let data_form = {
        id: data["id"].trim(),
        heading: parseFloat(data["heading"]),
        pitch: parseFloat(data["pitch"]),
        roll: parseFloat(data["roll"]),
        height: parseFloat(data["height"]),
        location: {
          type: "Point",
          coordinates: [
            parseFloat(data["longitude"]),
            parseFloat(data["latitude"]),
          ],
        },
        scale: parseFloat(data["scale"]) / 100,
        modelUrl: data["modelUrl"],
        type: data["type"],
      };
      console.log(data_form);
      if (this.updateEntity) ENTITY_API.addEntity(data_form);
      else ENTITY_API.addEntity(data_form);
    },
    change_position_model([data_form, type]) {
      console.log(data_form, type);
      ENTITY_MODEL.tryParameterModel(this.entity, data_form, this.viewer);
    },
  },
};
</script>
