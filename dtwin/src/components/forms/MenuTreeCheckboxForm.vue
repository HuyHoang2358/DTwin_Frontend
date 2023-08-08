<template>
  <div class="w-full">
    <div class="w- full border border-[#E7E7E7] rounded">
      <div class="border-b border-[#E7E7E7] w-full">
        <div class="flex justify-start items-center gap-4 px-4 py-2">
          <input type="checkbox" @change="handleCheckBox('all')" />
          <p class="#333333">Tất cả</p>
        </div>
      </div>

      <div class="px-4 py-4">
        <div
          v-for="(menu, index) in menus"
          :key="`add-role-form-select-menu-${index}`"
        >
          <div class="flex justify-start items-center gap-4 py-2">
            <div class="w-3">
              <div v-if="menu.childs.length > 0">
                <button
                  type="button"
                  v-if="!menu.show_childs"
                  class="w-2 h-4"
                  @click="menu.show_childs = true"
                >
                  <icon-tag :name="'thin-right'"></icon-tag>
                </button>
                <button
                  type="button"
                  v-else
                  class="w-3 h-4"
                  @click="menu.show_childs = false"
                >
                  <icon-tag :name="'thin-down'"></icon-tag>
                </button>
              </div>
            </div>

            <input
              type="checkbox"
              @change="handleCheckBox(menu.id)"
              :checked="collection.includes(menu.id)"
            />
            <p class="#333333">{{ menu.name }}</p>
          </div>
          <div v-if="menu.show_childs" class="pl-6">
            <div
              class="flex justify-start items-center gap-4 py-2"
              v-for="(menu_child, index) in menu.childs"
              :key="`add-role-form-select-menu-child-${index}`"
            >
              <div class="w-4 h-4"></div>
              <input
                type="checkbox"
                @change="handleCheckBox(menu_child.id)"
                :checked="collection.includes(menu_child.id)"
              />
              <p class="#333333">{{ menu_child.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTag from "@/components/IconTag.vue";
import MENU_API from "@/apis/modules/menu";
export default {
  props: ["menu_collection"],
  components: { IconTag },
  data() {
    return {
      menus: [],
      collection: this.menu_collection,
    };
  },
  created() {
    this.getAllMenus();
  },
  methods: {
    async get_childs_menu(menu_url) {
      let response = await MENU_API.getChildMenus(menu_url);
      return response.data.data;
    },
    async getAllMenus() {
      let response = await MENU_API.getAllMenus();
      this.menus = response.data.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          url: item.url,
          description: item.description,
          sortOrder: item.sortOrder,
          appId: item.appId,
          parentId: item.parentId,
          childs: [],
          show_childs: false,
        };
      });
      for (const menu of this.menus) {
        menu.childs = await this.get_childs_menu(menu.url);
      }
    },
    removeItem(item_id) {
      this.collection = this.collection.filter((e) => e !== item_id);
    },
    pushItem(item) {
      if (!this.collection.some((e) => e === item)) this.collection.push(item);
    },
    handleCheckBox(id) {
      let tmp_menus = this.menus.filter((e) => e.id === id);
      if (tmp_menus.length > 0) {
        let tmp_menu = tmp_menus[0];
        if (this.collection.some((e) => e === id)) {
          for (const tmp_child of tmp_menu.childs)
            this.removeItem(tmp_child.id);
        } else {
          for (const tmp_child of tmp_menu.childs) this.pushItem(tmp_child.id);
        }
      }
      if (this.collection.some((e) => e === id)) this.removeItem(id);
      else this.pushItem(id);

      this.pushDataToForm();
    },
    pushDataToForm() {
      this.$emit("update_data", this.collection);
    },
  },
};
</script>
