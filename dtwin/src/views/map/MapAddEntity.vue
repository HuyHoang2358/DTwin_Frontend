<template>
  <MainLayout class="h-full font-magistral" :page="'hatangdothi'">
    <map-view></map-view>
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
              v-for="sample in showing_models"
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
  </MainLayout>
</template>
<script>
import MapView from "@/components/map/MapView.vue";
import MainLayout from "@/views/front/layouts/MainLayout.vue";
import LeftBox from "@/components/box/LeftBox.vue";
import DTP_ENTITY from "@/DTP_JS/entity";

export default {
  components: { LeftBox, MainLayout, MapView },
  props: [],
  data() {
    return {
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
      showing_models: [],
      trying_model_type: "building",
    };
  },
  created() {},
  async mounted() {
    this.change_adding_model_type();
    let center_point = {
      longitude: 108.2271639,
      latitude: 16.0958724,
      height: 0,
    };
    DTP_ENTITY.draw_x_y_z(center_point);
  },
  methods: {
    change_adding_model_type() {
      this.showing_models = this.models_library.filter(
        (e) => e.type === this.trying_model_type
      );
    },
    add_new_model(sample) {
      let entity_info = {
        longitude: 108.2271639,
        latitude: 16.0958724,
        height: 0,
        heading: 0,
        pitch: 0,
        roll: 0,
        scale: 0.8,
        color: 1,
        id: [...Array(24)].map(() => Math.random().toString(36)[2]).join(""),
        modelUrl: sample.modelId,
        type: sample.type,
      };
      let new_entity = DTP_ENTITY.model_entity(entity_info);
      console.log(new_entity);
    },
  },
};
</script>
