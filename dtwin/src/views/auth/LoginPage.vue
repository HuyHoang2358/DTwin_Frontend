<template>
  <div class="auth_login flex h-screen w-full justify-center items-center">
    <div class="w-full flex justify-center">
      <div>
        <!--Logo Viettel-->
        <div class="text-center px-16">
          <h1 class="xl:text-5xl text-6xl text-main_color font-magistral_b_i">
            VIETTEL DIGITAL
          </h1>
          <h4
            class="xl:text-xl text-2xl tracking-[.48em] text-white font-magistral_bk_i mt-4"
          >
            OPERATION PLATFORM
          </h4>
        </div>
        <!--Form login-->
        <div class="mt-16">
          <div class="auth_login_border rounded">
            <div class="auth_login_border_1 rounded">
              <div
                class="auth_login_form p-16 2xl:p-16 text-lg 2xl:text-xl font-magistral text-white bg-white/[.05]"
              >
                <form @submit.prevent="submit">
                  <div>
                    <div class="flex justify-between">
                      <p class="text-left">Nhập Email</p>
                      <p class="text-right text-base">
                        {{ error.identity }}
                      </p>
                    </div>

                    <input
                      type="text"
                      required
                      v-model="form.identity"
                      @input="inputIdentity()"
                      class="bg-white/50 w-full rounded mt-2 pl-4 2xl:px-8 py-3 border border-[#DDDDDD] focus:ring-0 focus:border-[#FF1F4F]"
                    />
                  </div>
                  <div class="mt-4">
                    <div class="flex justify-between">
                      <p class="text-left">Nhập mật khẩu</p>
                      <p class="text-right text-base">
                        {{ error.password }}
                      </p>
                    </div>

                    <div class="w-full mt-2 relative">
                      <input
                        :type="showPassword ? 'text' : 'password'"
                        required
                        v-model="form.password"
                        @input="inputPassword()"
                        class="bg-white/50 w-full rounded pl-4 2xl:px-8 py-3 border border-[#DDDDDD] focus:ring-0 focus:border-[#FF1F4F]"
                      />
                      <button
                        type="button"
                        class="absolute top-0 right-0 w-6 h-full mr-4"
                        @click="showPassword = !showPassword"
                      >
                        <icon-tag
                          :name="'show-password'"
                          v-if="!showPassword"
                        ></icon-tag>
                        <icon-tag :name="'hidden-password'" v-else></icon-tag>
                      </button>
                    </div>
                  </div>
                  <div class="text-[#EE0033] text-sm text-left mt-2">
                    <p v-if="this.error.identity">{{ this.error.identity }}</p>
                    <p v-if="this.error.password">{{ this.error.password }}</p>
                  </div>
                  <div class="text-right mr-2">
                    <router-link to="#" class="text-right hover:text-main_color"
                      >Quên mật khẩu?</router-link
                    >
                  </div>

                  <button
                    type="submit"
                    class="mt-4 2xl:mt-8 bg-main_color rounded py-2 w-full border border-main_color hover:bg-[#E00433]"
                  >
                    Login
                  </button>

                  <div class="mt-12 2xl:mt-24">
                    <p>
                      Bạn đã có tài khoản chưa?
                      <router-link
                        to="#"
                        class="text-main_color underline underline-offset-4 hover:text-white"
                        >Đăng ký</router-link
                      >
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth_login {
  background-image: url("../../../public/images/background/auth_login_background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";
import { mapGetters } from "vuex";

export default {
  props: [""],
  components: { IconTag },
  data() {
    return {
      form: {
        identity: "",
        password: "",
      },

      error: {
        identity: "",
        password: "",
      },
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters(["AUTH/getToken", "AUTH/isLoggedIn"]),
  },
  created() {
    if (this["AUTH/isLoggedIn"]) {
      this.$router.push({ name: "homepage" }); // redirect to home page
    }
  },
  methods: {
    inputIdentity() {
      const regex = /^[A-Za-z0-9 @.]+$/;
      if (!regex.test(this.form.identity))
        this.error.identity = "Email chỉ bao gồm chữ và số";
      else this.error.identity = "";
    },
    inputPassword() {
      this.error.password = "";
      // Code to limit length of password
    },
    validate_form() {
      this.inputIdentity();
      this.inputPassword();
      return this.error.identity === "" && this.error.password === "";
    },
    async submit() {
      if (this.validate_form()) {
        try {
          await this.$store.dispatch("AUTH/logout");
          await this.$store.dispatch("AUTH/login", this.form);
          this.$router.push({ name: "homepage" }); // redirect to home page
        } catch (error) {
          this.form.password = "";
          if (error.response.data.msg === "User not found") {
            this.form.identity = "";
            this.error.identity = error.response.data.msg;
          } else this.error.password = error.response.data.msg;
        }
      }
    },
  },
};
</script>
