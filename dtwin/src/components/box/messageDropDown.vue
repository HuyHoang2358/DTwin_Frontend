<template>
  <div class="w-full h-full message_box px-4 pt-4 pb-2">
    <slot />
  </div>
</template>
<style scoped>
.message_box {
  background-image: url("../../../public/images/background/message_box.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
export default {
  props: ["title"],
  components: {},
  data() {
    return {};
  },
  methods: {
    hiddenBox() {
      this.$emit("hidden-box");
    },
  },
};
</script>
