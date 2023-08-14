<template>
  <MainLayout>
    <div class="w-full h-full">
      <MapIndex @child-data="receiveDataFromChild"></MapIndex>
      <div class="absolute top-0 left-0 w-1/4 justify-start h-full p-5">
        <LeftBox :title="'Thông tin mô hình'">
          <ModelPositionForm
            :model="model"
            @submit-form="update_position_model"
            @change-position="change_position_model"
            v-if="editForm"
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
export default {
  props: [""],
  components: { MapIndex, ModelPositionForm, LeftBox, MainLayout },
  data() {
    return {
      viewer: null,
      editForm: false,
      model: {
        longitude: 0,
        latitude: 0,
        height: 0,
        heading: 0,
        pitch: 0,
        roll: 0,
        scale: 0,
        id: "123456",
      },
    };
  },
  created() {
    // Listen for the 'cesiumClick' event on the event bus
    this.emitter.on("edit-model-position", (eventData) => {
      this.editForm = true;
      console.log(eventData);
    });
  },
  methods: {
    receiveDataFromChild(data) {
      this.viewer = data;
      console.log(this.viewer);
    },
    update_position_model(data_form) {
      console.log(data_form);
    },
    change_position_model([data_form, type]) {
      console.log(data_form);
      console.log(type);
    },
  },
};
</script>
