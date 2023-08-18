<template>
  <div>
    <menu-form
      v-if="menu_form"
      :is-editing="is_edit_form"
      :form-data="menu_form_data"
      :menu_tree="main_menus"
      @close_form="close_form"
      @submit_form="submitMenuForm"
    ></menu-form>
    <new-main-layout :is_page="is_page">
      <!-- Table name -->
      <div class="text-[#333333]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-3xl">Danh mục</p>
          </div>
          <div>
            <div class="flex justify-end gap-4">
              <div class="w-96">
                <search-form
                  :placeholder="'Tìm kiếm'"
                  @searching="search_menu"
                ></search-form>
              </div>
              <FilterButton @click-button="filter_form = true"></FilterButton>
              <AddNewButton @click-button="open_add_menu_form"></AddNewButton>
            </div>
          </div>
        </div>
      </div>
      <!-- Table content -->
      <div class="w-full mt-6 border border-[#ECEFF4] rounded text-lg">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-[#F3F5F8] text-left">
              <th class="py-2 text-center px-4">STT</th>
              <th>Danh mục</th>
              <th>Đường dẫn</th>
              <th>Mô tả</th>
              <th>Thứ tự</th>
              <th>Tên App</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <menu-item
              :menu_item="menu_item"
              v-for="(menu_item, index) in main_menus"
              :key="`menu-list-${index}`"
              @openEditForm="open_edit_menu_form"
              @deleteMenu="delete_menu_item"
            ></menu-item>
          </tbody>
        </table>
      </div>
    </new-main-layout>
  </div>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
import MENU_API from "@/apis/modules/menu";
import MenuItem from "@/views/admin/contents/menu/MenuItem.vue";
import MenuForm from "@/views/admin/contents/menu/MenuForm.vue";
import AddNewButton from "@/components/buttons/AddNewButton.vue";
import FilterButton from "@/components/buttons/FilterButton.vue";
import SearchForm from "@/components/forms/SearchForm.vue";
export default {
  props: [""],
  components: {
    SearchForm,
    FilterButton,
    AddNewButton,
    MenuForm,
    MenuItem,
    NewMainLayout,
  },
  data() {
    return {
      is_page: "Menu",
      main_menus: [],
      menu_form: false,
      is_edit_form: false,
      menu_form_data: {},
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
          id: item.id,
          name: item.name,
          url: item.url,
          description: item.description,
          sortOrder: item.sortOrder,
          appId: item.appId,
          parentId: item.parentId == null ? "" : item.parentId,
          childs: [],
        };
      });
    },
    filter_form() {
      console.log("filter form");
    },
    search_menu(text) {
      console.log(text);
    },
    open_add_menu_form() {
      this.menu_form = true;
      this.is_edit_form = false;
    },
    close_form() {
      this.menu_form = false;
    },
    async submitMenuForm(data) {
      console.log("submit form");
      try {
        if (this.is_edit_form) {
          console.log(data);
          let res = await MENU_API.updateMenu(data);
          console.log(res);
        } else {
          await MENU_API.addMenu(data);
        }
        //this.$router.go();
        await this.getAllMenus();
        this.close_form();
      } catch (e) {
        let log = {
          Type: "Err",
          Function: "submitMenuForm()",
          Page: "MenuPage",
          Error: e,
        };
        console.log(log);
      }
    },
    open_edit_menu_form(menu_item) {
      this.menu_form = true;
      this.is_edit_form = true;
      this.menu_form_data = menu_item;
      console.log(this.menu_form_data);
    },
    async delete_menu_item(menuId) {
      if (window.confirm(`Bạn muốn xóa người dùng ?`)) {
        await MENU_API.deleteMenu(menuId);
        await this.getAllMenus();
      }
    },
  },
};
</script>
