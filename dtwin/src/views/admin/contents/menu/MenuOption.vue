<template>
  <option :value="menu_item.id">
    {{ menu_item.name }}
  </option>
  <option
    :value="menu_child.id"
    v-for="(menu_child, index) in childs_menu"
    :key="`menu-form-select-option-${index}`"
    class="pl-12"
  >
    {{ `---- ${menu_child.name}` }}
  </option>
</template>

<script>
import MENU_API from "@/apis/modules/menu";

export default {
  props: ["menu_item"],
  components: {},
  data() {
    return {
      main_menu: [],
      childs_menu: [],
    };
  },
  created() {
    this.get_childs_menu();
  },
  methods: {
    async get_childs_menu() {
      let response = await MENU_API.getChildMenus(this.menu_item.url);
      this.childs_menu = response.data.data;
    },
  },
};
</script>
