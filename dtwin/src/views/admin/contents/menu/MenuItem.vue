<template>
  <tr class="text-left text-base">
    <td class="py-2 px-2 text-center w-12">
      <button @click="get_childs_menu()">
        <div class="w-4 h-3" v-if="show_childs_menu">
          <icon-tag :name="'thin-down'"></icon-tag>
        </div>
        <div class="w-3 h-4" v-else>
          <icon-tag :name="'thin-right'"></icon-tag>
        </div>
      </button>
    </td>
    <td>{{ menu_item.name }}</td>
    <td>{{ menu_item.url }}</td>
    <td>{{ menu_item.description }}</td>
    <td>{{ menu_item.sortOrder }}</td>
    <td>{{ menu_item.appId }}</td>
    <td>
      <div class="flex justify-center items-center gap-4">
        <button
          class="p-2 bg-[#F1F1F2] rounded"
          @click="open_edit_menu_form(menu_item)"
        >
          <div class="w-4 h-4">
            <icon-tag :name="'edit-square'"></icon-tag>
          </div>
        </button>
        <button
          class="p-2 bg-[#F1F1F2] rounded"
          @click="delete_menu_item(menu_item.id)"
        >
          <div class="w-4 h-4">
            <icon-tag :name="'red-delete'"></icon-tag>
          </div>
        </button>
      </div>
    </td>
  </tr>
  <menu-child
    :menu_child="childs_menu"
    v-if="show_childs_menu"
    @editMenu="open_edit_menu_form"
    @deleteMenu="delete_menu_item"
  ></menu-child>
</template>

<script>
import IconTag from "@/components/IconTag.vue";
import MenuChild from "@/views/admin/contents/menu/MenuChild.vue";
import MENU_API from "@/apis/modules/menu";

export default {
  props: ["menu_item"],
  emits: ["openEditForm", "deleteMenu"],
  components: { MenuChild, IconTag },
  data() {
    return {
      childs_menu: this.menu_item.childs,
      show_childs_menu: false,
    };
  },
  methods: {
    async get_childs_menu() {
      this.show_childs_menu = !this.show_childs_menu;
      let response = await MENU_API.getChildMenus(this.menu_item.url);
      this.childs_menu = response.data.data;
    },
    open_edit_menu_form(menu) {
      this.$emit("openEditForm", menu);
    },
    delete_menu_item(menuId) {
      if (confirm("Do you really want to delete?")) {
        this.$emit("deleteMenu", menuId);
        this.show_childs_menu = false;
      }
    },
  },
};
</script>
