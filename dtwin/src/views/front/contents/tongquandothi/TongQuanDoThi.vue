<template>
  <MainLayout class="h-full font-magistral" :page="'tongquandothi'">
    <div class="h-full w-full bgg"></div>
    <div
      class="absolute top-0 left-0 w-1/4 justify-start p-5 text-white text-xl"
    >
      <LeftBox :title="'Loại báo cáo'">
        <div class="flex justify-between font-magistral_b">
          <div class="">Báo cáo tổng hợp</div>
          <div class="">Hiển thị</div>
        </div>
        <div class="font-magistral_l mt-4">
          <div class="px-4 py-1 flex justify-between items-center">
            <p>Chiều cao tòa nhà</p>
            <div class="w-4">
              <icon-tag :name="'more'"></icon-tag>
            </div>
          </div>
        </div>
      </LeftBox>
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
import IconTag from "@/components/IconTag.vue";
export default {
  props: [""],
  components: { IconTag, LeftBox, MainLayout },
  data() {
    return {};
  },
  methods: {},
};
</script>
