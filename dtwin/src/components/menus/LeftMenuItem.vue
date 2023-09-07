<template>
  <div class="w-full h-full relative rounded text-sm font-sarabun_bold_italic">
    <div v-if="!menu_item.active">
      <div class="menu_item_border absolute top-0 h-full w-full rounded"></div>
      <div class="menu_item_background h-full w-full">
        <div class="menu_item h-full">
          <RouterLink :to="{ name: menu_item.routeName }">
            <button
              type="button"
              class="text-left h-full w-full px-4 py-1 text-[#AD9999] pl-[25%]"
            >
              {{ menu_item.title1 }} <br />
              {{ menu_item.title2 }}
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="menu_item_border1 absolute top-0 h-full w-full rounded"></div>
      <div class="menu_item_background1 h-full w-full">
        <div class="menu_item h-full">
          <RouterLink :to="{ name: menu_item.routeName }">
            <button
              type="button"
              class="text-left h-full w-full px-4 py-1 pl-[25%]"
            >
              {{ menu_item.title1 }} <br />
              {{ menu_item.title2 }}
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["menu_item"],
  components: {},
  computed: {},
};
</script>
