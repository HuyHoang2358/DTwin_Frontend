<template>
  <div class="w-full mt-1">
    <div
      class="px-4 py-1 flex justify-between items-center box_black_linear"
      v-if="title != null"
    >
      <div class="flex justify-start items-center gap-2">
        <div
          class="w-6 h-6 flex justify-center items-center"
          v-if="icon !== null"
        >
          <icon-tag :name="icon"></icon-tag>
        </div>

        <p>{{ title }}</p>
      </div>

      <button
        type="button"
        @click="show_drop_box = !show_drop_box"
        v-if="have_body"
      >
        <div class="w-3" v-if="!show_drop_box">
          <icon-tag :name="'thin-right'"></icon-tag>
        </div>
        <div class="w-4" v-else>
          <icon-tag :name="'thin-down'"></icon-tag>
        </div>
      </button>
    </div>
    <div v-if="have_body">
      <div class="box_black_linear1 py-2" v-if="show_drop_box">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped>
.box_black_linear {
  background-image: url("../../../public/images/background/black_opacity_1.png");
  background-repeat: repeat;
}
.box_black_linear1 {
  background-image: url("../../../public/images/background/black_opacity_50.png");
  background-repeat: repeat;
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["title", "icon", "have_body"],
  components: { IconTag },
  data() {
    return {
      show_drop_box: true,
    };
  },
  methods: {},
};
</script>
