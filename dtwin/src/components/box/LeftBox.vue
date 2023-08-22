<template>
  <div class="w-full">
    <button
      class="w-full px-4 py-2 text-white text-lg bg-[#C80F36]"
      @click="hiddenBox()"
    >
      <div class="flex justify-start gap-2 items-center">
        <div class="w-3 h-4">
          <icon-tag :name="'double-chevron-right'"></icon-tag>
        </div>
        <div class="font-magistral_b">{{ title }}</div>
      </div>
    </button>
    <div class="w-full p-4 box_black_linear">
      <slot />
    </div>
  </div>
</template>
<style scoped>
.box_black_linear {
  /* background-image: linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7));*/

  background-image: url("../../../public/images/background/black_opacity_100.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["title"],
  components: { IconTag },
  data() {
    return {};
  },
  methods: {
    hiddenBox() {
      this.$emit("hidden-box");
    },
  },
};
</script>
