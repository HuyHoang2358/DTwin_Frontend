<template>
  <div class="w-full h-full">
    <button class="relative" v-if="!sub_menu_item.active">
      <box-background :name="'sub-menu-item'"></box-background>
      <div
        class="absolute top-0 h-full w-full text-center flex justify-center items-center"
      >
        <p class="text-[#AD9999] font-semibold">{{ sub_menu_item.name }}</p>
      </div>
    </button>
    <button class="relative" v-else>
      <box-background :name="'sub-menu-item-active'"></box-background>
      <div
        class="absolute top-0 h-full w-full text-center flex justify-center items-center"
      >
        <p class="text-white font-semibold">{{ sub_menu_item.name }}</p>
      </div>
    </button>
  </div>
</template>
<script>
import BoxBackground from "@/components/BoxBackground.vue";

export default {
  props: ["sub_menu_item"],
  components: { BoxBackground },
  computed: {},
};
</script>
