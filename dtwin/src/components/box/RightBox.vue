<template>
  <div class="w-full">
    <div class="flex justify-end">
      <button
        class="bg-[#C80F36] px-2 py-1.5 pr-4 flex justify-center items-center"
        v-if="!show_box"
        @click="show_box = !show_box"
      >
        <div class="w-3.5 h-4.5">
          <icon-tag :name="'double-chevron-left'"></icon-tag>
        </div>
      </button>
    </div>
    <div class="w-full" v-if="show_box">
      <button
        class="w-full px-4 py-1 text-base text-white bg-[#C80F36]"
        @click="show_box = !show_box"
      >
        <div class="flex justify-start gap-2 items-center">
          <div class="w-3.5 h-4.5">
            <icon-tag :name="'double-chevron-right'"></icon-tag>
          </div>
          <div class="font-sarabun_bold_italic">{{ title }}</div>
        </div>
      </button>
      <div class="w-full p-4 box_black_linear">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped>
.box_black_linear {
  background-image: url("../../../public/images/background/black_opacity_100.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["title", "is_show"],
  components: { IconTag },
  data() {
    return {
      show_box: this.is_show,
    };
  },
  methods: {},
};
</script>
