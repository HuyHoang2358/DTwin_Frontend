<template>
  <div>
    <RoleForm
      v-if="role_form"
      :is-editing="is_edit_form"
      :form-data="role_form_data"
      @close_form="close_role_form"
      @submit_form="submit_role_form"
    >
    </RoleForm>

    <new-main-layout :is_page="is_page">
      <!-- Table name -->
      <div class="text-[#333333]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-3xl">Danh sách vai trò</p>
          </div>
          <div>
            <div class="flex justify-end gap-4">
              <div class="w-96">
                <search-form
                  :placeholder="'Tìm kiếm'"
                  @searching="searchRole"
                ></search-form>
              </div>
              <FilterButton @click-button="filter_form = true"></FilterButton>

              <AddNewButton @click-button="open_add_role_form"></AddNewButton>
            </div>
          </div>
        </div>
      </div>
      <!-- Table content -->
      <div class="w-full mt-6 border border-[#ECEFF4] rounded">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-[#F3F5F8] text-left">
              <th class="py-2 text-center">STT</th>
              <th>ID</th>
              <th>Tên vai trò</th>
              <th>Tên ứng dụng</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-left text-base"
              v-for="(role, index) in roles"
              :key="`role-list-${role.roleId}`"
            >
              <td class="py-4 px-2 text-center">
                {{ index + 1 }}
              </td>
              <td>{{ role.roleId }}</td>
              <td>{{ role.roleName }}</td>
              <td>{{ role.appId }}</td>
              <td>
                <div class="flex justify-center items-center gap-4">
                  <button
                    type="button"
                    class="p-2 bg-[#F1F1F2] rounded"
                    @click="editRole(role.roleId)"
                  >
                    <div class="w-4 h-4">
                      <icon-tag :name="'edit-square'"></icon-tag>
                    </div>
                  </button>
                  <button
                    type="button"
                    class="p-2 bg-[#F1F1F2] rounded"
                    @click="deleteRole(role)"
                  >
                    <div class="w-4 h-4">
                      <icon-tag :name="'red-delete'"></icon-tag>
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </new-main-layout>
  </div>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
import IconTag from "@/components/IconTag.vue";
import ROLE_API from "@/apis/modules/role";
import AddNewButton from "@/components/buttons/AddNewButton.vue";
import FilterButton from "@/components/buttons/FilterButton.vue";
import SearchForm from "@/components/forms/SearchForm.vue";
import RoleForm from "@/views/admin/contents/role/RoleForm.vue";

export default {
  props: [""],
  components: {
    RoleForm,
    SearchForm,
    FilterButton,
    AddNewButton,
    IconTag,
    NewMainLayout,
  },
  data() {
    return {
      is_page: "Role",
      role_form: false,
      is_edit_form: false,
      filter_form: false,
      role_form_data: {},
      roles: [
        {
          roleId: "default",
          roleName: "default",
          parentId: "default",
          appId: "default",
        },
      ],
    };
  },
  computed: {},
  created() {
    this.get_all_roles();
  },
  methods: {
    open_add_role_form() {
      this.role_form = true;
      this.is_edit_form = false;
      this.role_form_data = {
        roleId: "",
        roleName: "",
        appId: "",
        parentId: "",
        menuInRole: [],
        rightInRole: [],
        userInRole: [],
        rightInRoleDetail: [],
        userInRoleDetail: [],
      };
    },
    async editRole(roleID) {
      this.role_form_data = await ROLE_API.getRoleDetail(roleID);
      this.role_form = true;
      this.is_edit_form = true;

      console.log(this.role_form_data);
    },
    close_role_form() {
      this.role_form = false;
      this.is_edit_form = false;
    },
    async submit_role_form(data) {
      if (!this.is_edit_form) {
        //console.log(data);
        await ROLE_API.addRole(data);
      } else {
        await ROLE_API.updateRole(data);
      }
      this.close_role_form();
      await this.get_all_roles();
    },

    async get_all_roles() {
      try {
        let response = await ROLE_API.get_roles();
        console.log(response);
        this.roles = response.data.data;
      } catch (e) {
        console.log({
          Type: "Err",
          Function: "getAllUsers()",
          Page: "UserPage",
          Error: e,
        });
      }
    },

    searchRole(text) {
      console.log(text);
    },
    async deleteRole(role) {
      if (window.confirm(`Bạn muốn xóa Role: ${role.roleName} ?`)) {
        await ROLE_API.deleteRole([role.roleId]);
        await this.get_all_roles();
      }
    },
  },
};
</script>
