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
                  {{ isEditing ? "Chỉnh sửa" : "Thêm mới" }}
                </p>
                <div class="grid grid-cols-2 gap-16">
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Tên</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập tên"
                        v-model="form.name"
                        required
                      />
                    </div>

                    <div class="w-full mt-4" v-if="!isEditing">
                      <p>Tài khoản</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập tài khoản"
                        v-model="form.userId"
                        required
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Email</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập email"
                        v-model="form.email"
                      />
                    </div>
                    <div class="w-full mt-4" v-if="!isEditing">
                      <p>Mật khẩu</p>
                      <input
                        type="password"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập mật khẩu"
                        v-model="form.password"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="w-full mt-4" v-if="!isEditing">
                      <p>Vai trò</p>
                      <select
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        v-model="form.roleId"
                      >
                        <option
                          :value="role.roleId"
                          v-for="(role, index) in roles"
                          :key="`select-roles-${index}`"
                        >
                          {{ role.roleName }}
                        </option>
                      </select>
                    </div>
                    <div class="w-full mt-4">
                      <p>Số điện thoại</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập số điện thoại"
                        v-model="form.phone"
                      />
                    </div>
                    <div class="w-full mt-4" v-if="!isEditing">
                      <p>Website</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập đường dẫn"
                        v-model="form.site"
                      />
                    </div>

                    <div class="w-full mt-4">
                      <p>Địa chỉ</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Nhập địa chỉ"
                        v-model="form.address"
                      />
                    </div>

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
import ROLE_API from "@/apis/modules/role";

export default {
  props: {
    isEditing: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default: () => ({
        name: "",
        email: "",
        phone: "",
        site: "",
        address: "",
        password: "",
        userId: "",
        roleId: "",
      }),
    },
  },
  components: {
    IconTag,
  },
  data() {
    return {
      form: { ...this.formData },
      roles: [],
    };
  },
  computed: {},
  created() {
    this.get_all_roles();
  },
  methods: {
    async get_all_roles() {
      try {
        let response = await ROLE_API.get_roles();
        this.roles = response.data.data;
        this.form.roleId = this.roles.length > 0 ? this.roles[0].roleId : "";
      } catch (e) {
        console.log({
          Type: "Err",
          Function: "get_all_roles()",
          Page: "UserForm",
          Error: e,
        });
      }
    },
    submitForm() {
      //console.log(this.form);
      this.$emit("submit_form", this.form);
      this.form = {
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
    close_form() {
      this.$emit("close_form");
    },
  },
};
</script>
