<template>
  <button
    class="px-8 py-2 rounded bg-[#C80F36] text-white"
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
