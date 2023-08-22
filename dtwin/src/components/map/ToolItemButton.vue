<template>
  <button
    class="flex justify-center items-center w-12 h-12 bg-linear"
    @click="click_event()"
  >
    <div>
      <div class="w-5 h-5 flex items-center" v-if="icon != null">
        <icon-tag :name="icon"></icon-tag>
      </div>

      <p v-else class="font-magistral_medium text-lg">{{ text }}</p>
    </div>
  </button>
</template>
<style scoped>
.bg-linear {
  background-image: linear-gradient(
    to top,
    rgba(5, 5, 5, 0.5),
    rgba(5, 5, 5, 0.5)
  );
}
</style>
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
