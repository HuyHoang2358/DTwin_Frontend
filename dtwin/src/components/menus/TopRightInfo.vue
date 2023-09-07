<template>
  <div class="h-full flex justify-end items-center gap-2 top_right_info">
    <!-- Language -->
    <div class="border-r-2 border-white px-4">
      <TopRightMenuButton
        :text="'VIE'"
        v-if="config_lang"
        @click-button="changeLanguage"
      >
      </TopRightMenuButton>
      <TopRightMenuButton :text="'EN'" v-else @click-button="changeLanguage">
      </TopRightMenuButton>
    </div>
    <div class="border-r-2 border-white px-4">
      <TopRightMenuButton :icon="'simulation'"> </TopRightMenuButton>
    </div>
    <div class="border-r-2 border-white px-4">
      <TopRightMenuButton :icon="'setting'"> </TopRightMenuButton>
    </div>
    <div class="px-4">
      <TopRightMenuButton :icon="'circle-user'" @click-button="goToAdmin">
      </TopRightMenuButton>
    </div>
    <!-- Simulation -->
  </div>
</template>
<script>
import TopRightMenuButton from "@/components/menus/TopRightMenuButton.vue";

export default {
  props: [],
  components: {
    TopRightMenuButton,
  },
  data() {
    return {
      config_lang: true,
    };
  },
  created() {},
  computed: {},
  methods: {
    goToAdmin() {
      this.$router.push({ name: "admin.index" });
    },
    changeLanguage() {
      this.config_lang = !this.config_lang;
    },
  },
};
</script>
