<template>
  <div class="w-full">
    <div class="w-full px-4 py-2 text-white text-lg bg-[#C80F36]">
      <div class="flex justify-start gap-2 items-center">
        <div class="w-3 h-4">
          <icon-tag :name="'double-chevron-right'"></icon-tag>
        </div>
        <div class="font-magistral_b">{{ title }}</div>
      </div>
    </div>
    <div class="w-full p-4 box_black_linear">
      <slot />
    </div>
  </div>
</template>
<style>
.box_black_linear {
  background-image: linear-gradient(rgba(5, 5, 5, 0.78), rgba(5, 5, 5, 0.78));
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
  methods: {},
};
</script>
