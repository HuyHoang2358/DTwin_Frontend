<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-blacklight lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <i class="fa-solid fa-earth-asia text-3xl text-green-600"></i>
          <span class="mx-2 text-3xl font-semibold text-white"
            >Digital Twin</span
          >
        </div>
      </div>

      <nav class="pl-4 py-4 mt-12 font-light">
        <h3 class="mb-2 ml-4 text-base text-bodydark2 text-left">MENU</h3>
        <router-link
          class="flex items-center mt-2 duration-200 text-bodydark1 hover:bg-graydark px-4 py-2 text-xl"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
          to="/dashboard"
        >
          <i class="fa-solid fa-table-columns"></i>
          <span class="mx-4 font-light tracking-wide">Dashboard</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: [""],
  components: {},
  data() {
    return {
      isOpen: true,
      inactiveClass: ref(
        "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
      ),
      activeClass: ref(
        "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
      ),
    };
  },
  methods: {},
};
</script>
