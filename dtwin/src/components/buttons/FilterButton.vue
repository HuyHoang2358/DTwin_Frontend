<template>
  <button
    class="px-6 py-1 border border-[#908E99] text-base rounded-xl"
    @click="click_event()"
  >
    <div class="flex justify-center gap-2 items-center">
      <p>Filters</p>
      <div class="w-4 h-4">
        <icon-tag :name="'filter'"></icon-tag>
      </div>
    </div>
  </button>
</template>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: [],
  components: { IconTag },
  computed: {},
  methods: {
    click_event() {
      this.$emit("click-button");
    },
  },
};
</script>
