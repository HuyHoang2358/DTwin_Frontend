<template>
  <div class="w-full px-4 py-1">
    <div class="flex justify-between items-center text-white">
      <p class="pl-2" v-if="title !== null">{{ title }}</p>
      <button type="button" @click="click_event()">
        <div class="w-8 h-4">
          <icon-tag :name="'on-status'" v-if="status"></icon-tag>
          <icon-tag :name="'off-status'" v-else></icon-tag>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["title", "value"],

  components: { IconTag },
  computed: {},
  data() {
    return {
      status: this.value,
    };
  },
  methods: {
    click_event() {
      this.status = !this.status;
      this.$emit("click-button");
    },
  },
};
</script>
