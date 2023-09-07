<template>
  <div class="w-full h-full flex justify-center items-center">
    <button @click="click_event" class="h-5">
      <div class="w-5 h-5" v-if="icon">
        <icon-tag :name="icon"></icon-tag>
      </div>

      <p class="align-middle mt-[-4px]" v-else>{{ text }}</p>
    </button>
  </div>
</template>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["icon", "text"],
  components: { IconTag },
  computed: {},
  methods: {
    click_event() {
      this.$emit("click-button");
    },
  },
};
</script>
