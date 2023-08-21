<template>
  <button
    class="px-8 py-2 rounded bg-[#7A7A7A] text-white"
    @click="click_event()"
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  props: ["title"],
  components: {},
  computed: {},
  methods: {
    click_event() {
      this.$emit("click-button");
    },
  },
};
</script>
