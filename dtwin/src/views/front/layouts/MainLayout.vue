<template>
  <div class="flex flex-col h-screen w-full">
    <top-menu></top-menu>
    <div class="content-body flex-1 w-full">
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
