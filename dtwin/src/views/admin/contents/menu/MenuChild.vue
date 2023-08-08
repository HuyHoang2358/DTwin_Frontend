<template>
  <tr
    class="text-left text-base"
    v-for="(menu_item, index) in menu_child"
    :key="`menu-child-${index}`"
  >
    <td></td>
    <td class="pl-6 py-2 px-2">{{ menu_item.name }}</td>
    <td>{{ menu_item.url }}</td>
    <td>{{ menu_item.description }}</td>
    <td>{{ menu_item.sortOrder }}</td>
    <td>{{ menu_item.appId }}</td>
    <td>
      <div class="flex justify-center items-center gap-4">
        <button
          class="p-2 bg-[#F1F1F2] rounded"
          @click="openEditMenu(menu_item)"
        >
          <div class="w-4 h-4">
            <icon-tag :name="'edit-square'"></icon-tag>
          </div>
        </button>
        <button
          class="p-2 bg-[#F1F1F2] rounded"
          @click="$emit('deleteMenu', menu_item.id)"
        >
          <div class="w-4 h-4">
            <icon-tag :name="'red-delete'"></icon-tag>
          </div>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["menu_child"],
  emits: ["editMenu", "deleteMenu"],
  components: { IconTag },
  data() {
    return {
      show_childs_menu: false,
    };
  },
  methods: {
    openEditMenu(menu) {
      this.$emit("editMenu", menu);
    },
  },
};
</script>
