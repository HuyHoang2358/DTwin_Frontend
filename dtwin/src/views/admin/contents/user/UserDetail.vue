<template>
  <div>
    <div class="absolute w-full h-screen bg-[#201C1D]/70 top-0 left-0 z-50">
      <div class="flex justify-center items-center h-full">
        <div class="w-3/5 relative">
          <div class="w-full h-full p-4">
            <div
              class="bg-white rounded-lg drop-shadow-lg w-full h-full px-16 py-8 pb-16"
            >
              <form class="w-full h-full text-[#201C1D] text-lg text-left">
                <p class="text-3xl font-semibold text-[#333333]">
                  Thông tin người dùng
                </p>
                <div class="grid grid-cols-2 gap-16">
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Tên</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your name"
                        v-model="form.name"
                        readonly
                      />
                    </div>

                    <div class="w-full mt-4">
                      <p>Tài khoản</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your username"
                        v-model="form.userId"
                        readonly
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Email</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your email"
                        v-model="form.email"
                        readonly
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Mật khẩu</p>
                      <input
                        type="password"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        value="************"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="w-full mt-4">
                      <p>Vai trò</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your password"
                        v-model="form.roleId"
                        readonly
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Số điện thoại</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your phone"
                        v-model="form.phone"
                        readonly
                      />
                    </div>
                    <div class="w-full mt-4">
                      <p>Website</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your site"
                        v-model="form.site"
                        readonly
                      />
                    </div>

                    <div class="w-full mt-4">
                      <p>Địa chỉ</p>
                      <input
                        type="text"
                        class="bg-[#F6F6F6] pl-4 rounded p-3 w-full border-0 focus:ring-[#E7E7E7] mt-2 caret-[#FF1F4F]"
                        placeholder="Enter your address"
                        v-model="form.address"
                        readonly
                      />
                    </div>

                    <!--                    <div
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
                        type="button"
                        class="col-span-1 py-2 bg-main_color rounded-lg text-white"
                        @click="open_edit_form()"
                      >
                        Edit
                      </button>
                    </div>-->
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
    };
  },
  computed: {},
  created() {},
  methods: {
    close_form() {
      this.$emit("close_form");
    },
    open_edit_form() {
      this.$emit("edit_form", this.formData);
    },
  },
};
</script>
