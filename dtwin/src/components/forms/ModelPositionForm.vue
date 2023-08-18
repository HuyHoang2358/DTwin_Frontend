<template>
  <form class="w-full text-base" v-on:submit.prevent="submitForm">
    <div class="w-full bg-linear">
      <div class="w-full form-title text-white font-bold px-4 py-2">
        <div class="flex items-center justify-between">
          <p>Thông tin thửa đất</p>
          <div class="w-4">
            <icon-tag :name="'thin-down'"></icon-tag>
          </div>
        </div>
      </div>
      <div class="w-full p-4 text-white">
        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">ID</p>
          </div>
          <div class="col-span-2">
            <input
              id="model_position_form_id"
              type="text"
              v-model="form.id"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
        </div>
        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Model URL</p>
          </div>
          <div class="col-span-2">
            <input
              id="model_position_form_id"
              type="text"
              v-model="form.modelUrl"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
        </div>
        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Type</p>
          </div>
          <div class="col-span-2">
            <select
              class="w-full border-0 py-1 px-4 text-black"
              v-model="form.type"
            >
              <option
                :value="type_mode.id"
                v-for="type_mode in object_types"
                :key="type_mode.id"
              >
                {{ type_mode.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Latitude</p>
          </div>
          <div class="col-span-2">
            <input
              id="model_position_form_latitude"
              type="text"
              v-model="form.latitude"
              @input="changePosition('latitude')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Longitude</p>
          </div>
          <div class="col-span-2">
            <input
              type="text"
              id="model_position_form_longitude"
              v-model="form.longitude"
              @input="changePosition('longitude')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Height</p>
          </div>
          <div class="col-span-2">
            <input
              type="text"
              v-model="form.height"
              id="model_position_form_height"
              @input="changePosition('height')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Heading</p>
          </div>
          <div class="col-span-1">
            <input
              type="text"
              v-model="form.heading"
              id="model_position_form_heading"
              @input="changePosition('heading')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
          <div class="col-span-1">
            <input
              type="range"
              v-model="form.heading"
              id="model_position_form_heading_range"
              @input="changePosition('heading')"
              min="-180"
              max="180"
              class="w-full form_input"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Roll</p>
          </div>
          <div class="col-span-1">
            <input
              type="text"
              v-model="form.roll"
              id="model_position_form_roll"
              @input="changePosition('roll')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
          <div class="col-span-1">
            <input
              type="range"
              v-model="form.roll"
              id="model_position_form_roll_range"
              @input="changePosition('roll')"
              min="-180"
              max="180"
              class="w-full form_input"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Pitch</p>
          </div>
          <div class="col-span-1">
            <input
              type="text"
              v-model="form.pitch"
              id="model_position_form_pitch"
              @input="changePosition('pitch')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
          <div class="col-span-1">
            <input
              type="range"
              v-model="form.pitch"
              id="model_position_form_pitch_range"
              @input="changePosition('pitch')"
              min="-180"
              max="180"
              class="w-full form_input"
            />
          </div>
        </div>

        <div class="w-full grid grid-cols-3 gap-2 items-center mt-2">
          <div class="col-span-1">
            <p class="text-left">Scale</p>
          </div>
          <div class="col-span-1">
            <input
              type="text"
              v-model="form.scale"
              id="model_position_form_scale"
              @input="changePosition('scale')"
              class="w-full form_input border-0 py-1 px-4"
            />
          </div>
          <div class="col-span-1">
            <input
              type="range"
              v-model="form.scale"
              id="model_position_form_scale_range"
              @input="changePosition('scale')"
              min="0"
              max="100"
              class="w-full form_input"
            />
          </div>
        </div>

        <div class="w-full flex justify-end gap-2 mt-4">
          <button
            type="button"
            class="px-8 py-2 bg-[#7A7A7A] border-0"
            @click="close_edit_form()"
          >
            Hủy bỏ
          </button>
          <button type="submit" class="px-8 py-2 bg-[#C80F36] border-0">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<style>
.bg-linear {
  background-image: linear-gradient(
    to left,
    rgba(5, 5, 5, 0.74),
    rgba(5, 5, 5, 0.5)
  );
  .form-title {
    background-image: linear-gradient(
      to right,
      rgba(238, 0, 51, 0.4),
      rgba(0, 0, 0, 0)
    );
  }
  .form_input {
    background-image: linear-gradient(
      to left,
      rgba(5, 5, 5, 0.7),
      rgba(5, 5, 5, 0.74)
    );
    opacity: 50%;
  }
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";
import emitter from "@/mitt";
import ENTITY_API from "@/apis/modules/entity";

export default {
  props: ["model"],
  components: { IconTag },
  data() {
    return {
      form: { ...this.model },
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
    };
  },
  mounted() {
    // Listen for the 'cesiumClick' event on the event bus
    emitter.on("entity-form-info", async (eventData) => {
      this.form = eventData["entity_info"];
      this.form = await ENTITY_API.getEntityInfo(eventData["entity_info"].id);
      if (this.form === null) this.form = eventData["entity_info"];
    });
    emitter.on("edit-model-lat-lon", (eventData) => {
      this.form.latitude = eventData["latitude"];
      this.form.longitude = eventData["longitude"];
      this.changePosition("pos");
    });
  },
  methods: {
    submitForm() {
      this.$emit("submit-form", this.form);
    },
    changePosition(change_type) {
      this.$emit("change-position", [this.form, change_type]);
    },
    close_edit_form() {
      this.$emit("close-edit-form");
    },
  },
};
</script>
