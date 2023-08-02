<template>
  <div class="flex h-screen font-roboto">
    <!-- Side bar -->
    <new-side-bar :is_page="is_page"></new-side-bar>
    <!-- Content -->
    <div class="flex-1 flex-col">
      <!-- Head menu -->
      <div class="flex flex-col h-full">
        <new-header-partial></new-header-partial>
        <!-- Content -->
        <div class="flex-grow bg-[#F8F9FB] h-full p-4">
          <div class="bg-white rounded-lg h-full drop-shadow-lg px-12 py-8">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewSideBar from "@/views/admin/partials/NewSideBar.vue";
import NewHeaderPartial from "@/views/admin/partials/NewHeaderPartial.vue";

export default {
  props: ["is_page"],
  components: { NewHeaderPartial, NewSideBar },
  data() {
    return {};
  },
  methods: {},
};
</script>
