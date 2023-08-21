<template>
  <MainLayout
    class="h-full font-magistral"
    :page="'hatangdothi'"
    :sub_menu_active="'32'"
  >
    <div class="h-full w-full bgg"></div>
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

export default {
  props: [""],
  components: {
    MainLayout,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
