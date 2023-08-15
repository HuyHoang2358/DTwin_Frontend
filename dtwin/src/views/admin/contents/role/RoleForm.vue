.vue
<template>
  <div>
    <div class="absolute w-full h-screen bg-[#201C1D]/70 top-0 left-0 z-50">
      <div class="flex justify-center">
        <div class="w-3/5 relative">
          <div class="w-full h-full p-4">
            <div
              class="bg-white rounded-lg drop-shadow-lg w-full h-full px-16 py-8 pb-16"
            >
              <form
                class="w-full h-full text-[#201C1D] text-base text-left"
                v-on:submit.prevent="submitForm"
              >
                <p class="text-3xl font-semibold text-[#333333]">
                  {{ isEditing ? "Chỉnh sửa" : "Thêm vai trò mới" }}
                </p>
                <div class="grid grid-cols-3 gap-4">
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Tên vai trò</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-2 w-full border-0 focus:ring-[#E7E7E7] mt-1 caret-[#FF1F4F]"
                        placeholder="Nhập tên vai trò"
                        v-model="form.roleName"
                        required
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Thêm người dùng</p>
                      <div class="mt-1">
                        <search-check-box-form
                          :search_form="search_user_form"
                          @update_data="update_user_data"
                        >
                        </search-check-box-form>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="w-full mt-4" v-if="!isEditing">
                      <p>ID</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-2 w-full border-0 focus:ring-[#E7E7E7] mt-1 caret-[#FF1F4F]"
                        placeholder="Nhập ID"
                        v-model="form.roleId"
                        required
                      />
                    </div>

                    <div class="w-full mt-4">
                      <p>Tên ứng dụng</p>
                      <select
                        class="bg-[#F6F6F6] pl-4 rounded p-2 w-full border-0 focus:ring-[#E7E7E7] mt-1 caret-[#FF1F4F]"
                        v-model="form.appId"
                      >
                        <option value="">Không</option>
                        <option
                          :value="app.appId"
                          v-for="(app, index) in apps"
                          :key="`select-form-app-${index}`"
                        >
                          {{ app.appName }}
                        </option>
                      </select>
                    </div>
                    <div class="w-full mt-4">
                      <p>Gán quyền</p>
                      <div class="mt-1">
                        <search-check-box-form
                          :search_form="search_right_form"
                          @update_data="update_right_data"
                        >
                        </search-check-box-form>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Vai trò cấp trên</p>
                      <select
                        class="bg-[#F6F6F6] pl-4 rounded p-2 w-full border-0 focus:ring-[#E7E7E7] mt-1 caret-[#FF1F4F]"
                        v-model="form.parentId"
                      >
                        <option value="">Null</option>
                        <!--
                          <option
                            :value="role.roleId"
                            v-for="(role, index) in roles"
                            :key="`select-form-role-${index}`"
                          >
                            {{ role.roleName }}
                          </option>
                        -->
                      </select>
                    </div>
                    <div class="w-full mt-4">
                      <p>Thêm menu</p>
                      <div class="w-full mt-1">
                        <menu-tree-checkbox-form
                          @update_data="update_menu_data"
                          :menu_collection="formData.menuInRole"
                        ></menu-tree-checkbox-form>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-1"></div>
                  <div class="col-span-1"></div>
                  <div class="col-span-1">
                    <div
                      class="w-full mt-12 grid grid-cols-2 gap-8 text-center"
                    >
                      <button
                        type="button"
                        class="col-span-1 py-2 bg-[#E2E2E2] rounded-lg"
                        @click="close_form()"
                      >
                        Hủy
                      </button>
                      <button
                        type="submit"
                        class="col-span-1 py-2 bg-main_color rounded-lg text-white"
                        v-if="!isEditing"
                      >
                        Thêm mới
                      </button>
                      <button
                        type="submit"
                        class="col-span-1 py-2 bg-main_color rounded-lg text-white"
                        v-if="isEditing"
                      >
                        Cập nhật
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
import SearchCheckBoxForm from "@/components/forms/SearchCheckBoxForm.vue";
import MenuTreeCheckboxForm from "@/components/forms/MenuTreeCheckboxForm.vue";
import APP_API from "@/apis/modules/app";
import Role_API from "@/apis/modules/role";
export default {
  props: {
    isEditing: {
      type: Boolean,
      default: false,
    },

    formData: {
      type: Object,
      default: () => ({
        roleName: "",
        roleId: "",
        parentId: "",
        appId: "",
        userInRole: [],
        rightInRole: [],
        menuInRole: [],
        rightInRoleDetail: [],
        userInRoleDetail: [],
      }),
    },
  },
  components: {
    MenuTreeCheckboxForm,
    SearchCheckBoxForm,
    IconTag,
  },
  data() {
    return {
      form: { ...this.formData },
      search_right_form: {
        placeholder: "Nhập tên quyền",
        collection_table_name: "Danh sách quyền được gán",
        main_column_name: "Quyền",
        type_search: "right",
        search_results: [],
        collection: this.formData.rightInRoleDetail,
      },
      search_user_form: {
        placeholder: "Chọn thành viên",
        collection_table_name: "Danh sách thành viên được chọn",
        main_column_name: "Tên thành viên",
        type_search: "user",
        search_results: [],
        collection: this.formData.userInRoleDetail,
      },
      roles: [],
      apps: [],
    };
  },
  computed: {},
  created() {
    this.fetchAppList();
    //this.fetchRoleList();
  },
  methods: {
    async fetchAppList() {
      this.apps = await APP_API.getAppList();
    },
    async fetchRoleList() {
      this.roles = await Role_API.getRoleList();
    },

    submitForm() {
      this.$emit("submit_form", this.form);
    },
    close_form() {
      this.$emit("close_form");
    },

    update_menu_data(menu_ids) {
      this.form.menuInRole = menu_ids;
    },
    update_right_data(right_ids) {
      this.form.rightInRole = right_ids;
    },
    update_user_data(user_ids) {
      this.form.userInRole = user_ids;
    },
  },
};
</script>
