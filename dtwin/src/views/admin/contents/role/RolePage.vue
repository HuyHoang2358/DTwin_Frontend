<template>
  <div>
    <div
      class="absolute w-full h-screen bg-[#201C1D]/70 top-0 left-0 z-50"
      v-if="add_role_form"
    >
      <div class="flex justify-center items-center h-full">
        <div class="w-3/5 h-3/4 relative">
          <div class="w-full h-full p-4">
            <div
              class="bg-white rounded-lg drop-shadow-lg w-full h-full px-16 py-8"
            >
              <form
                class="w-full h-full text-[#201C1D] text-lg text-left"
                v-on:submit.prevent="addUser()"
              >
                <p class="text-3xl font-semibold text-[#333333]">
                  Add new user
                </p>
                <div class="grid grid-cols-2 gap-16">
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Name</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your name"
                        v-model="form.name"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Site</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your site"
                        v-model="form.site"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Email</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your email"
                        v-model="form.email"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Username</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your username"
                        v-model="form.userId"
                      />
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Phone</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your phone"
                        v-model="form.phone"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Address</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your address"
                        v-model="form.address"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Password</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your password"
                        v-model="form.password"
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Password Confirm</p>
                      <input
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your password confirm"
                        v-model="form.passwordConfirm"
                      />
                    </div>
                    <div
                      class="w-full mt-12 grid grid-cols-2 gap-8 text-center"
                    >
                      <button class="col-span-1 py-2 bg-[#E2E2E2] rounded-lg">
                        Cancel
                      </button>
                      <button
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
            @click="show_opacity_layer = false"
          >
            <icon-tag :name="'close-form'"></icon-tag>
          </button>
        </div>
      </div>
    </div>

    <new-main-layout>
      <!-- Table name -->
      <div class="text-[#333333]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-3xl">Role List</p>
          </div>
          <div>
            <div class="flex justify-end gap-4">
              <div class="w-96">
                <form class="w-full">
                  <div class="w-full relative">
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      class="block w-full p-2 pl-10 text-sm text-[#C7C7C7] border border-[#E9EDF4] rounded-xl bg-[##E9EDF4]"
                      placeholder="Type role name or roleID ..."
                      @input="searchRole()"
                      v-model="searchRoleValue"
                    />
                  </div>
                </form>
              </div>
              <button
                class="px-6 py-1 border border-[#908E99] text-base rounded-xl hover:bg-[#908E99]"
              >
                <div class="flex justify-center gap-2 items-center">
                  <p>Filters</p>
                  <div class="w-4 h-4">
                    <icon-tag :name="'filter'"></icon-tag>
                  </div>
                </div>
              </button>

              <button
                class="px-6 py-1 border border-[#908E99] text-base rounded-xl hover:bg-[#908E99]"
                @click="add_role_form = true"
              >
                <div class="flex justify-center gap-2 items-center">
                  <p>Add new</p>
                  <div class="w-4 h-4">
                    <icon-tag :name="'add-circle'"></icon-tag>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Table content -->
      <div class="w-full mt-6 border border-[#ECEFF4] rounded">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-[#F3F5F8] text-center">
              <th class="py-2">#</th>
              <th>Role ID</th>
              <th>Role Name</th>
              <th>Parent Id</th>
              <th>App Id</th>
              <th>Actions</th>
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
              <td>
                {{ role.parentId }}
              </td>
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

export default {
  props: [""],
  components: { IconTag, NewMainLayout },
  data() {
    return {
      add_role_form: false,
      searchRoleValue: "",
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
    async get_all_roles() {
      let response = await ROLE_API.get_roles();
      console.log(response);
      this.roles = response.data.data;
    },
  },
};
</script>
