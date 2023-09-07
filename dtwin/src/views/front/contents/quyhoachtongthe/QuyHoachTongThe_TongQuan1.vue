<template>
  <MainLayout class="h-full" :page="'quyhoachtongthe'">
    <!--    <map-view></map-view>-->
    <div
      class="absolute top-0 left-0 w-1/5 justify-start p-5 text-white text-base"
    >
      <LeftBox :title="'Các lớp bản đồ'" :is_show="show_map_list">
        <div class="flex justify-start font-sarabun_bold">
          <div class="">Loại bản đồ</div>
        </div>
        <div class="font-sarabun_extra_light mt-4">
          <drop-down-box
            :title="map.name"
            :icon="map.icon"
            :have_body="true"
            v-for="map in map_class"
            :key="`map-box-${map.id}`"
          >
            <drop-down-box2
              :title="sub_map.name"
              v-for="sub_map in map.childs"
              :key="`sub-map-box-${sub_map.id}`"
            ></drop-down-box2>
          </drop-down-box>

          <div class="w-full mt-4">
            <button
              class="add_map_button w-full border-dashed border border-[#C80F36] py-2"
              @click="open_map_form()"
            >
              <div class="flex justify-center items-center gap-2">
                <div class="w-4 h-4 text-[#C80F36]">
                  <icon-tag :name="'add-circle'"></icon-tag>
                </div>
                <p>Thêm mới bản đồ</p>
              </div>
            </button>
          </div>
        </div>
      </LeftBox>
    </div>
    <div
      class="absolute top-0 right-0 w-1/5 justify-start p-5 text-white text-lg"
    >
      <ToolMap :show="tool_map_show"></ToolMap>
    </div>
    <MapForm
      v-if="map_form"
      :is-editing="false"
      @submit-form="submitForm"
      @close-form="close_form"
    ></MapForm>
  </MainLayout>
</template>
<style scoped>
.add_map_button {
  background-image: url("../../../../../public/images/background/black_opacity_1.png");
  background-repeat: repeat;
}
</style>
<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import LeftBox from "@/components/box/LeftBox.vue";
import IconTag from "@/components/IconTag.vue";
import DropDownBox from "@/components/box/DropDownBox.vue";
import DropDownBox2 from "@/components/box/DropDownBox2.vue";
import ToolMap from "@/components/map/ToolMap.vue";
import MapForm from "@/components/map/MapForm.vue";
/*import MapView from "@/components/map/MapView.vue";*/
/*import DTP_ENTITY from "@/DTP_JS/entity";
import DTP_MAP from "@/DTP_JS/map";*/
export default {
  props: [""],
  components: {
    /* MapView,*/
    MapForm,
    ToolMap,
    DropDownBox2,
    DropDownBox,
    IconTag,
    LeftBox,
    MainLayout,
  },
  data() {
    return {
      map_form: true,
      show_map_list: false,
      tool_map_show: false,
      map_class: [
        {
          name: "Bản đồ địa chính",
          id: 1,
          icon: "map-dia-chinh",
          childs: [
            {
              name: "Địa chính đô thị",
              id: 11,
            },
            {
              name: "Địa chính nông thôn",
              id: 12,
            },
          ],
        },
        {
          name: "Bản đồ rừng",
          id: 2,
          icon: "map-forest",
          childs: [
            {
              name: "Bản đồ rừng 2000",
              id: 21,
            },
            {
              name: "Bản đồ rừng 2001",
              id: 22,
            },
          ],
        },
        {
          name: "Bản đồ giao thông",
          id: 3,
          icon: "map-traffic",
          childs: [
            {
              name: "Bản đồ giao thông 1",
              id: 31,
            },
            {
              name: "Bản đồ giao thông 2",
              id: 32,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    /* this.boundary_entity = DTP_ENTITY.load_entity_from_geo_json(
      "/Data/geoJson/DaNang_SonTra_NaiHienDong.json"
    );
    DTP_MAP.open_openstreetmap();*/
  },
  methods: {
    close_form() {
      this.map_form = false;
    },
    open_map_form() {
      this.show_map_list = false;
      this.map_form = true;
      this.tool_map_show = false;
    },
    submitForm(data) {
      console.log(data);
    },
  },
};
</script>
