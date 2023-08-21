<template>
  <div class="flex flex-col h-screen w-full">
    <top-menu :page="page" :sub_menu_active="sub_menu_active"></top-menu>
    <div class="content-body flex-1 w-full relative">
      <slot />
    </div>
  </div>
</template>

<script>
import TopMenu from "@/views/front/partials/TopMenu.vue";
export default {
  props: ["page", "sub_menu_active"],
  components: { TopMenu },
  data() {
    return {};
  },
  methods: {},
};
</script>
