<template>
  <MainLayout>
    <div class="w-full h-full">
      <MapIndex></MapIndex>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import MapIndex from "@/views/map/MapIndex.vue";
export default {
  props: [""],
  components: { MainLayout, MapIndex },
  data() {
    return {};
  },
  methods: {},
};
</script>
