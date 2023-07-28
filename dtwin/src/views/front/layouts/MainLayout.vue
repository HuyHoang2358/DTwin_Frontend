<template>
  <div class="flex flex-col h-screen w-full">
    <top-menu></top-menu>
    <div class="content-body h-full w-full bg-gray-500 mt-[-10px]">
      <slot />
    </div>
  </div>
</template>

<script>
import TopMenu from "@/views/front/partials/TopMenu.vue";
export default {
  props: [""],
  components: { TopMenu },
  data() {
    return {};
  },
  methods: {},
};
</script>
