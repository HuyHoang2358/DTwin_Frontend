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
            <p class="text-3xl">Role List</p>
          </div>
          <div>
            <div class="flex justify-end gap-4">
              <div class="w-96">
                <search-form
                  :placeholder="'Type role name or roleID ...'"
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
              <th class="py-2 text-center">#</th>
              <th>Role ID</th>
              <th>Role Name</th>
              <th>App Id</th>
              <th class="text-center">Actions</th>
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
                  <button class="p-2 bg-[#F1F1F2] rounded">
                    <div class="w-4 h-4">
                      <icon-tag :name="'edit-square'"></icon-tag>
                    </div>
                  </button>
                  <button class="p-2 bg-[#F1F1F2] rounded">
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
      role_form: true,
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
        menuInRole: "",
        rightInRole: "",
        userInRole: "",
      };
    },
    close_role_form() {
      this.role_form = false;
      this.is_edit_form = false;
    },
    submit_role_form() {
      console.log("ACC");
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
  },
};
</script>
