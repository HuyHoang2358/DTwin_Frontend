<template>
  <div class="h-full flex justify-start items-center content-center">
    <div class="border-r-2 border-white">
      <div class="flex justify-between items-center px-4">
        <icon-tag :name="'weather-icon'"></icon-tag>
        <p class="ml-2">24°C</p>
      </div>
    </div>

    <div class="border-r-2 border-white px-4">
      <p id="time_header" class="w-16 text-left">15:42:36</p>
    </div>
    <div class="px-4">
      <p id="date_time_header">2023/09/01</p>
    </div>
  </div>
</template>

<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: [],
  components: {
    IconTag,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
