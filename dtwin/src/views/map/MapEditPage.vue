<template>
  <MainLayout>
    <div class="w-full h-full">
      <MapIndex @child-data="receiveDataFromChild"></MapIndex>
      <div class="absolute top-0 left-0 w-1/4 justify-start h-full p-5">
        <LeftBox :title="'Thông tin mô hình'" v-if="editForm">
          <ModelPositionForm
            :model="model"
            @submit-form="update_position_model"
            @change-position="change_position_model"
          ></ModelPositionForm>
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
import ENTITY_API from "@/apis/modules/entity";
import HANDLE_ACTION from "@/DtwinJs/handle_action";
export default {
  props: [""],
  components: { MapIndex, ModelPositionForm, LeftBox, MainLayout },
  data() {
    return {
      entity: null,
      editForm: false,
      viewer: null,
      models: [],
      model: {
        longitude: 0,
        latitude: 0,
        height: 0,
        heading: 0,
        pitch: 0,
        roll: 0,
        scale: 1,
        id: "123456",
      },
    };
  },
  mounted() {
    // Listen for the 'cesiumClick' event on the event bus
    emitter.on("edit-model-position", (eventData) => {
      console.log("edit-model-position", eventData);
      this.editForm = true;
      this.model = eventData["entity_info"];
      this.entity = eventData["entity"];
      HANDLE_ACTION.start_handle_move_object(this.viewer);
    });
  },
  created() {
    this.get_all_entities_by_type("building");
  },
  methods: {
    receiveDataFromChild(data) {
      console.log("data", data);
      this.viewer = data.viewer;
      this.models = data.models;
    },
    update_position_model(data) {
      console.log("update", data);
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
        modelUrl: data["id"].trim(),
        type: "building",
      };
      console.log(data_form);
      ENTITY_API.addEntity(data_form);
    },
    change_position_model([data_form, type]) {
      console.log("change_position_model", data_form, type);
      ENTITY_MODEL.tryParameterModel(this.entity, data_form, this.viewer);
    },
    async get_all_entities_by_type(type) {
      let all_entities = await ENTITY_API.getAllEntities(type);

      all_entities.forEach((element) => {
        ENTITY_MODEL.addModel1(element, this.viewer);
      });
    },
  },
};
</script>
