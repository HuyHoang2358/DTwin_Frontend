<template>
  <div>
    <user-form
      v-if="user_form"
      :is-editing="is_edit_form"
      :form-data="user_form_data"
      @close_form="close_user_form"
      @submit_form="addUser"
    ></user-form>
    <user-detail
      v-if="user_detail"
      :form-data="user_form_data"
      @close_form="close_user_form"
      @edit_form="open_edit_user_form"
    ></user-detail>

    <new-main-layout :is_page="is_page">
      <!-- Table name -->
      <div class="text-[#333333]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-3xl">User List</p>
          </div>
          <div>
            <div class="flex justify-end gap-4">
              <div class="w-96">
                <search-form
                  :placeholder="'Search'"
                  @searching="searchUser"
                ></search-form>
              </div>
              <FilterButton @click-button="filter_form = true"></FilterButton>
              <AddNewButton @click-button="open_add_user_form"></AddNewButton>
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
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-left text-base"
              v-for="(user, index) in users"
              :key="`user-list-${user.userId}`"
            >
              <td class="py-4 px-2 text-center">
                {{ this.page * this.pageSize + index + 1 }}
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                {{ user.address }}
              </td>
              <td>{{ user.phone }}</td>
              <td>
                <div class="flex justify-center items-center gap-4">
                  <button
                    class="p-2 bg-[#F1F1F2] rounded"
                    @click="open_user_info(user)"
                  >
                    <div class="w-4 h-4 text-white">
                      <icon-tag :name="'show-password'"></icon-tag>
                    </div>
                  </button>
                  <button
                    class="p-2 bg-[#F1F1F2] rounded"
                    @click="open_edit_user_form(user)"
                  >
                    <div class="w-4 h-4">
                      <icon-tag :name="'edit-square'"></icon-tag>
                    </div>
                  </button>
                  <button
                    class="p-2 bg-[#F1F1F2] rounded"
                    @click="delete_user(user.userId)"
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
      <!-- Table end note -->
      <div class="w-full flex justify-end items-center gap-8 mt-2 text-sm">
        <div>
          <div class="flex justify-center items-center">
            <p class="text-sm">Số dòng trên trang:</p>
            <select
              class="border-0 focus:ring-0"
              v-model="pageSize"
              @change="changePageSize()"
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div>
          <p class="text-sm">{{ index_page }}</p>
        </div>
        <div>
          <button class="w-2 h-4" @click="previousPage()">
            <icon-tag :name="'chevron-left'"></icon-tag>
          </button>
        </div>
        <div>
          <button class="w-2 h-4" @click="nextPage()">
            <icon-tag :name="'chevron-right'"></icon-tag>
          </button>
        </div>
      </div>
    </new-main-layout>
  </div>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
import IconTag from "@/components/IconTag.vue";
import USER_API from "@/apis/modules/user";
import AddNewButton from "@/components/buttons/AddNewButton.vue";
import SearchForm from "@/components/forms/SearchForm.vue";
import FilterButton from "@/components/buttons/FilterButton.vue";
import UserForm from "@/views/admin/contents/user/UserForm.vue";
import UserDetail from "@/views/admin/contents/user/UserDetail.vue";

export default {
  props: [""],
  components: {
    UserDetail,
    UserForm,
    FilterButton,
    SearchForm,
    AddNewButton,
    IconTag,
    NewMainLayout,
  },
  data() {
    return {
      is_page: "User",
      user_detail: false,
      user_form: false,
      is_edit_form: false,
      filter_form: false,
      user_form_data: {},
      users: [],
      totalPage: 0,
      pageSize: 10,
      page: 0,
      totalUser: 0,
    };
  },
  computed: {
    index_page() {
      let start_index = Math.min(this.page * this.pageSize + 1, this.totalUser);
      let end_index = Math.min(this.page * this.pageSize, this.totalUser);
      return `${start_index} - ${end_index} của tổng số ${this.totalUser}`;
    },
  },
  created() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      try {
        let response = await USER_API.get_users(this.page, this.pageSize);
        let data = response.data.data;
        this.totalPage = data.totalPage;
        this.page = data.page;
        this.totalUser = data.total;
        this.users = data.items;
      } catch (e) {
        let log = {
          Type: "Err",
          Function: "getAllUsers()",
          Page: "UserPage",
          Error: e,
        };
        console.log(log);
      }
    },
    async changePageSize() {
      this.page = 0;
      await this.getAllUsers();
    },
    async previousPage() {
      this.page = Math.max(0, this.page - 1);
      await this.getAllUsers();
    },
    async nextPage() {
      this.page = Math.min(this.totalPage - 1, this.page + 1);
      await this.getAllUsers();
    },
    async searchUser(searchValue) {
      this.page = 0;
      if (searchValue === "") {
        await this.getAllUsers();
      } else {
        let response = await USER_API.search_user(
          searchValue,
          this.page,
          this.pageSize
        );
        let data = response.data.data;
        this.totalPage = data.totalPage;
        this.page = data.page;
        this.totalUser = data.total;
        this.users = data.items;
      }
    },
    open_add_user_form() {
      this.user_form = true;
      this.is_edit_form = false;
      this.user_form_data = {
        name: "",
        email: "",
        phone: "",
        site: "",
        address: "",
        password: "",
        userId: "",
        roleId: "",
      };
    },
    async addUser(data) {
      try {
        if (this.is_edit_form) await USER_API.update_user(data);
        else await USER_API.add_user(data);
        await this.getAllUsers();
        this.user_form = false;
      } catch (e) {
        let log = {
          Type: "Err",
          Function: "addUser()",
          Page: "UserPage",
          Error: e,
        };
        console.log(log);
      }
    },
    close_user_form() {
      this.user_form = false;
      this.user_detail = false;
    },
    open_edit_user_form(user) {
      this.user_form = true;
      this.user_detail = false;
      this.is_edit_form = true;
      this.user_form_data = user;
    },
    async delete_user(userId) {
      try {
        await USER_API.delete_user({ userId: userId });
        await this.getAllUsers();
      } catch (e) {
        let log = {
          Type: "Err",
          Function: "delete_user()",
          Page: "UserPage",
          Error: e,
        };
        console.log(log);
      }
    },
    open_user_info(user) {
      this.user_detail = true;
      this.user_form_data = user;
    },
  },
};
</script>
