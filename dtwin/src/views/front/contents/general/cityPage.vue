<template>
  <MainLayout class="h-full">
    <div class="h-full w-full bgg"></div>
    <div class="absolute top-0 left-0 w-1/4 justify-start p-5">
      <LeftBox :title="'Loại báo cáo'"> </LeftBox>
    </div>
  </MainLayout>
</template>
<style>
.bgg {
  background-image: url("../../../../../public/images/background/highdefinition-city-scene-sky-architecture-sunset 1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
import MainLayout from "@/views/front/layouts/MainLayout";
import LeftBox from "@/components/box/LeftBox.vue";
export default {
  props: [""],
  components: { LeftBox, MainLayout },
  data() {
    return {};
  },
  methods: {},
};
</script>
