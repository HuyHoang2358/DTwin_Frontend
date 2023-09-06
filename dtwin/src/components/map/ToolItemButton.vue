<template>
  <button
    class="flex justify-center items-center w-12 h-12 relative"
    @click="click_event()"
    :title="toolTip"
  >
    <div class="w-full h-full absolute top-0 left-0">
      <box-background
        :name="'tool-map-item-button-active'"
        v-if="is_active"
      ></box-background>
      <box-background :name="'tool-map-item-button'" v-else></box-background>
    </div>
    <div class="w-full h-full relative flex justify-center items-center">
      <div class="w-5 h-5 flex items-center" v-if="icon != null">
        <icon-tag :name="icon"></icon-tag>
      </div>

      <p v-else class="font-magistral_medium text-lg text-white">
        {{ text }}
      </p>
    </div>
  </button>
</template>
<script>
import IconTag from "@/components/IconTag.vue";
import BoxBackground from "@/components/BoxBackground.vue";

export default {
  props: ["icon", "text", "toolTip", "active"],
  components: { BoxBackground, IconTag },
  computed: {},
  data() {
    return {
      is_active: this.active,
    };
  },
  methods: {
    click_event() {
      console.log(this.is_active);
      this.is_active = !this.is_active;
      console.log(this.is_active);
      this.$emit("click-button");
    },
  },
};
</script>
