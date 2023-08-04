<template>
  <div>
    <new-main-layout :is_page="is_page">
      <!-- Table name -->
      <div class="text-[#333333]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-3xl">Menu List</p>
          </div>
        </div>
      </div>
      <!-- Table content -->
      <div class="w-full mt-6 border border-[#ECEFF4] rounded">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-[#F3F5F8] text-left">
              <th class="py-2 text-center">#</th>
              <th>Menu</th>
              <th>Url</th>
              <th>Description</th>
              <th>Sort Order</th>
              <th>App Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-left text-base"
              v-for="(main_menu, index) in main_menus"
              :key="`menu-list-${index}`"
            >
              <td class="py-4 px-2 text-center">
                <button class="w-4 h-4" @click="getAllSubMenus(main_menu.url)">
                  <icon-tag :name="'down'"></icon-tag>
                </button>
              </td>
              <td>{{ main_menu.name }}</td>
              <td>{{ main_menu.url }}</td>
              <td>{{ main_menu.description }}</td>
              <td>{{ main_menu.sortOrder }}</td>
              <td>{{ main_menu.appId }}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </new-main-layout>
  </div>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
import MENU_API from "@/apis/modules/menu";
import IconTag from "@/components/IconTag.vue";
export default {
  props: [""],
  components: { IconTag, NewMainLayout },
  data() {
    return {
      is_page: "Menu",
      main_menus: [],
    };
  },
  computed: {},
  created() {
    this.getAllMenus();
  },
  methods: {
    async getAllMenus() {
      let response = await MENU_API.getAllMenus();
      this.main_menus = response.data.data;
      this.main_menus = response.data.data.map((item) => {
        return {
          name: item.name,
          url: item.url,
          description: item.description,
          sortOrder: item.sortOrder,
          appId: item.appId,
          childs: this.getAllSubMenus(item.url),
        };
      });
      console.log(this.main_menus);
    },
    async getAllSubMenus(url) {
      let response = await MENU_API.getChildMenus(url);
      return response.data.data;
    },
  },
};
</script>
