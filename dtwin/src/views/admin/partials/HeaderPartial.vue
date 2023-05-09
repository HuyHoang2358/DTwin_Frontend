<template>
  <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1">
    <div
      class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11 border-b-[0.5px] border-gray-300"
    >
      <!-- search form -->
      <div class="flex items-center">
        <div class="relative mx-4 lg:mx-0">
          <div class="hidden sm:block">
            <form action="https://formbold.com/s/unique_form_id" method="POST">
              <div class="relative text-xl text-gray-500">
                <button class="absolute top-1/2 left-0 -translate-y-1/2">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="text"
                  placeholder="Type to search..."
                  class="w-full bg-transparent pr-4 pl-9 border-0 outline-0 focus:ring-0 focus:ring-offset-0"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- top right menu -->
      <div class="flex items-center">
        <!-- notifications btn -->
        <button
          class="flex mx-2 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray-200 hover:text-primary text-xl p-2"
        >
          <i class="fa-regular fa-bell"></i>
        </button>

        <!-- message btn -->
        <button
          class="flex mx-2 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray-200 hover:text-primary text-xl p-2"
        >
          <i class="fa-regular fa-comment"></i>
        </button>

        <!-- User information btn-->
        <div class="relative mx-2">
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="relative z-10 w-10 h-10 block overflow-hidden rounded-full shadow focus:outline-none bg-gray-200"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              alt="Your avatar"
            />
          </button>

          <div
            v-show="dropdownOpen"
            @click="dropdownOpen = false"
            class="fixed inset-0 z-10 w-full h-full"
          ></div>

          <div
            v-show="dropdownOpen"
            class="absolute w-56 right-0 z-20 mt-5 bg-white rounded-md shadow-xl text-gray-500 text-left gap-4 border-b"
          >
            <div class="px-8 py-4 border-b-[1px] border-gray-400">
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base mt-4"
              >
                <i class="fa-regular fa-user mr-2"></i>
                My Profile
              </a>
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base mt-4"
              >
                <i class="fa-regular fa-id-badge mr-2"></i>
                My Contacts
              </a>
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base mt-4"
              >
                <i class="fa-solid fa-gear mr-2"></i>
                Account Settings
              </a>
            </div>
            <div class="px-8 py-4">
              <a
                href="#"
                class="block gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue-600 lg:text-base"
              >
                <i class="fa-solid fa-right-from-bracket mr-2"></i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  props: [""],
  components: {},
  data() {
    return {
      dropdownOpen: ref(false),
      isOpen: true,
    };
  },
  methods: {},
};
</script>
