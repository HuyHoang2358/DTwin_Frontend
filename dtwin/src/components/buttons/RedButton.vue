<template>
  <button
    class="px-6 py-1.5 bg-[#C80F36] text-white align-middle"
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
