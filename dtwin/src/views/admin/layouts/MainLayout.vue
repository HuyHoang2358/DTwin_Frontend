<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <side-bar></side-bar>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header-partial></header-partial>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/views/admin/partials/SideBar";
import HeaderPartial from "@/views/admin/partials/HeaderPartial";
export default {
  props: [""],
  components: { HeaderPartial, SideBar },
  data() {
    return {};
  },
  methods: {},
};
</script>
