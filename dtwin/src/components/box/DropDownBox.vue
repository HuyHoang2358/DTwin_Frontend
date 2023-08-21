<template>
  <div class="w-full mt-2">
    <div
      class="px-4 py-1 flex justify-between items-center box_black_linear"
      v-if="title != null"
    >
      <p>{{ title }}</p>
      <button type="button" class="w-4" @click="show_drop_box = !show_drop_box">
        <icon-tag :name="'more'" v-if="!show_drop_box"></icon-tag>
        <icon-tag :name="'thin-down'" v-else></icon-tag>
      </button>
    </div>
    <div class="box_black_linear1" v-if="show_drop_box">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.box_black_linear {
  background-image: linear-gradient(rgba(5, 5, 5, 0.48), rgba(5, 5, 5, 0.48));
}
.box_black_linear1 {
  background-image: linear-gradient(rgba(5, 5, 5, 0.28), rgba(5, 5, 5, 0.28));
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["title"],
  components: { IconTag },
  data() {
    return {
      show_drop_box: true,
    };
  },
  methods: {},
};
</script>
