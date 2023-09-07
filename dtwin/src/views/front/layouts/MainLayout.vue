<template>
  <div class="flex flex-col h-screen w-full">
    <top-menu></top-menu>
    <div class="content-body flex-1 w-full relative">
      <slot />
    </div>
  </div>
</template>

<script>
import TopMenu from "@/components/menus/TopMenu.vue";
export default {
  props: [],
  components: { TopMenu },
  data() {
    return {};
  },
  methods: {},
};
</script>
