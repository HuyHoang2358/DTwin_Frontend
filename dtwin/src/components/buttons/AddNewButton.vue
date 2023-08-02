<template>
  <button
    class="px-6 py-1 text-base rounded-xl bg-[#FF1F4F] text-white"
    @click="click_event()"
  >
    <div class="flex justify-center gap-2 items-center">
      <p>Add new</p>
      <div class="w-4 h-4">
        <icon-tag :name="'add-circle'"></icon-tag>
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
