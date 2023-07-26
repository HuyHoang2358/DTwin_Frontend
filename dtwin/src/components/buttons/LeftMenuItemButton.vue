<template>
  <div class="w-full h-full relative rounded">
    <div class="menu_item_border absolute top-0 h-full w-full rounded"></div>
    <div class="menu_item_background h-full w-full">
      <div class="menu_item h-full">
        <button
          class="text-center h-full w-full px-6 py-2 text-[#AD9999] font-magistral_b_i text-xs lg:text-sm xl:text-base"
        >
          {{ title1 }} <br />
          {{ title2 }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title1", "title2"],
  components: {},
  computed: {},
};
</script>
