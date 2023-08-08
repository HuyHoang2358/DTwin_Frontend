<template>
  <div class="w-full">
    <form>
      <div class="w-full relative">
        <input
          type="text"
          class="bg-[#F6F6F6] pl-4 p-2 w-full focus:ring-[#FAFAFA] mt-1 caret-[#FF1F4F] border rounded-t border-[#E7E7E7]"
          :placeholder="search_form.placeholder"
          v-model="searchText"
          @input="search()"
        />
        <button
          type="button"
          @click="search()"
          class="text-[#FF1F4F] w-4 h-4 absolute top-0 right-0 mt-5 mr-6"
        >
          <icon-tag :name="'down'"></icon-tag>
        </button>
      </div>
    </form>

    <div v-if="search_result_checkboxes" @mouseleave="closeResultCheckboxes()">
      <table class="w-full table-auto border border-[#E7E7E7]">
        <thead>
          <tr class="bg-[#E7E7E7] text-left text-[#201C1D] font-normal">
            <td class="py-2 text-center w-12">Chọn</td>
            <td class="py-2 text-center w-12">STT</td>
            <td>{{ search_form.main_column_name }}</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in search_results"
            :key="`table-search-result-${index}`"
            :class="{ 'bg-[#FAFAFA]': index % 2 }"
          >
            <td class="text-center">
              <input
                type="checkbox"
                :checked="collection.some((e) => e.id === item.id)"
                @change="handleCheckbox(item)"
              />
            </td>
            <td class="text-center py-2">
              {{ index + 1 }}
            </td>
            <td class="pr-4">{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-4" v-if="collection_table">
      <p class="text-left text-[#201C1D] font-normal">
        {{ search_form.collection_table_name }}
      </p>
      <table class="w-full table-auto mt-2">
        <thead>
          <tr class="bg-[#E7E7E7] text-left text-[#201C1D] font-normal">
            <td class="py-2 text-center w-16 rounded-tl-xl">STT</td>
            <td>{{ search_form.main_column_name }}</td>
            <td class="rounded-tr-xl pr-2 w-20">Thao tác</td>
          </tr>
        </thead>
        <tbody class="border border-[#E7E7E7]">
          <tr
            v-for="(collection_item, index) in collection"
            :key="`table-collection-${index}`"
            :class="{ 'bg-[#FAFAFA]': index % 2 }"
          >
            <td class="text-center py-2">
              {{ index + 1 }}
            </td>
            <td>{{ collection_item.name }}</td>
            <td class="text-center">
              <button
                type="button"
                class="p-1 bg-[#FAFAFA] rounded"
                @click="removeItem(collection_item.id)"
              >
                <div class="w-4 h-4">
                  <icon-tag :name="'red-delete'"></icon-tag>
                </div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import IconTag from "@/components/IconTag.vue";
import RIGHT_API from "@/apis/modules/right";
import USER_API from "@/apis/modules/user";
export default {
  props: ["search_form"],
  components: { IconTag },
  data() {
    return {
      searchText: "",
      search_result_checkboxes: false,
      collection_table: true,
      search_results: this.search_form.search_results,
      collection: this.search_form.collection,
    };
  },
  methods: {
    async search() {
      if (this.search_form.type_search === "right") {
        let response = await RIGHT_API.get_rights();
        this.search_results = response.data.data.map((item) => {
          return { id: item.rightId, name: item.rightName };
        });
      } else if (this.search_form.type_search === "user") {
        let response = null;
        if (this.searchText === "") response = await USER_API.get_users(0, 8);
        else response = await USER_API.search_user(this.searchText, 0, 8);
        console.log(response.data.data);
        this.search_results = response.data.data.items.map((item) => {
          return { id: item.userId, name: item.name };
        });
      }
      this.search_result_checkboxes = true;
      this.collection_table = false;
    },
    closeResultCheckboxes() {
      this.search_result_checkboxes = false;
      this.collection_table = true;
    },

    handleCheckbox(item) {
      if (this.collection.some((e) => e.id === item.id))
        this.removeItem(item.id);
      else {
        this.collection.push(item);
        this.pushDataToForm();
      }
    },
    removeItem(item_id) {
      this.collection = this.collection.filter((e) => e.id !== item_id);
      this.pushDataToForm();
    },
    pushDataToForm() {
      this.$emit(
        "update_data",
        this.collection.map((e) => e.id)
      );
    },
  },
};
</script>
