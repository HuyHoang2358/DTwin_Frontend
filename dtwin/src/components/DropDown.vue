<template>
  <div
    class="absolute top-0 right-0 w-1/4 mt-16 mr-4 rounded-xl drop-shadow-xl bg-white p-4 pb-12"
  >
    <p class="text-2xl text-[##201C1D] font-semibold text-left">{{ title }}</p>
    <div class="w-full mt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
