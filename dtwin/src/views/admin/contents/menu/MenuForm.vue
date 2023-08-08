<template>
  <div>
    <div class="absolute w-full h-screen bg-[#201C1D]/70 top-0 left-0 z-50">
      <div class="flex justify-center items-center h-full">
        <div class="w-3/5 relative">
          <div class="w-full h-full p-4">
            <div
              class="bg-white rounded-lg drop-shadow-lg w-full h-full px-16 py-8 pb-16"
            >
              <form
                class="w-full h-full text-[#201C1D] text-lg text-left"
                v-on:submit.prevent="submitForm"
              >
                <p class="text-3xl font-semibold text-[#333333]">
                  {{ isEditing ? "Edit Menu" : "Add new menu" }}
                </p>
                <div class="grid grid-cols-2 gap-16">
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Name</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter name of menu"
                        v-model="form.name"
                        required
                      />
                    </div>

                    <div class="w-full mt-4">
                      <p>Icon</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter link icon of menu"
                        v-model="form.icon"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Sort Order</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter sort order number "
                        v-model="form.sortOrder"
                      />
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Url</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter url after domain of menu "
                        v-model="form.url"
                        required
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>App ID</p>
                      <select
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        v-model="form.appId"
                      >
                        <option value="">Null</option>
                        <option
                          :value="app.appId"
                          v-for="(app, index) in apps"
                          :key="`select-roles-${index}`"
                          :selected="app.appId === form.appId"
                        >
                          {{ app.appName }}
                        </option>
                      </select>
                    </div>
                    <div class="w-full mt-4">
                      <p>Parent ID</p>
                      <select
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        v-model="form.parentId"
                      >
                        <option value="">Null</option>
                        <menu-option
                          :menu_item="menu"
                          v-for="(menu, index) in menu_tree"
                          :key="`menu-form-select-${index}`"
                        ></menu-option>
                      </select>
                    </div>
                    <div
                      class="w-full mt-12 grid grid-cols-2 gap-8 text-center"
                    >
                      <button
                        type="button"
                        class="col-span-1 py-2 bg-[#E2E2E2] rounded-lg"
                        @click="close_form()"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        class="col-span-1 py-2 bg-main_color rounded-lg text-white"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button
            class="absolute top-0 right-0 w-10 h-10"
            @click="close_form()"
          >
            <icon-tag :name="'close-form'"></icon-tag>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTag from "@/components/IconTag.vue";
import APP_API from "@/apis/modules/app";
import MenuOption from "@/views/admin/contents/menu/MenuOption.vue";

export default {
  props: {
    menu_tree: {
      type: Object,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default: () => ({
        id: "",
        name: "",
        icon: "",
        sortOrder: "",
        url: "",
        appId: "",
        parentId: "",
      }),
    },
  },
  components: {
    MenuOption,
    IconTag,
  },
  data() {
    return {
      form: { ...this.formData },
      apps: [],
    };
  },
  computed: {},
  created() {
    this.get_all_apps();
  },
  methods: {
    async get_all_apps() {
      try {
        let response = await APP_API.getAllApps();
        this.apps = response.data.data;
      } catch (e) {
        console.log({
          Type: "Err",
          Function: "get_all_apps()",
          Page: "MenuForm",
          Error: e,
        });
      }
    },

    submitForm() {
      this.$emit("submit_form", this.form);
      this.form = {
        id: "",
        name: "",
        icon: "",
        sortOrder: "",
        url: "",
        appId: "",
        parentId: "",
      };
    },

    close_form() {
      this.$emit("close_form");
    },
  },
};
</script>
