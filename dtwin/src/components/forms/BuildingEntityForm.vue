<template>
  <form class="w-full text-base" v-on:submit.prevent="submitForm">
    <div class="w-full bg-linear">
      <div class="w-full form-title text-white px-4 py-2">
        <div class="flex items-center font-medium justify-between">
          <p>Thông tin Static</p>
          <button type="button" @click="body_form_show1 = !body_form_show1">
            <div class="w-4">
              <icon-tag :name="'thin-down'"></icon-tag>
            </div>
          </button>
        </div>
      </div>
      <div
        class="w-full px-4 py-1 text-white text-left font-magistral_l text-[14px]"
        v-if="body_form_show1"
      >
        <div class="w-full mt-2">
          <p>Tên Tòa nhà</p>
          <input
            type="text"
            class="form_input mt-1 w-full h-12 border-0 bg-[#050505]/50"
            v-model="entityData.ten_toa_nha"
          />
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Tỉnh/Tp</p>
            <input
              type="text"
              class="form_input_field"
              v-model="entityData.dia_chi.commune"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Quận/Huyện</p>
            <input
              type="text"
              class="form_input_field"
              v-model="entityData.dia_chi.district"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Phường/Xã</p>
            <input
              type="text"
              class="form_input_field"
              v-model="entityData.dia_chi.province"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Số, đường</p>
            <input
              type="text"
              class="form_input_field"
              v-model="entityData.dia_chi.streetAddress"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Phân loại tòa nhà</p>
            <select class="form_input_field">
              <option>Loại A</option>
            </select>
          </div>
        </div>

        <div class="w-full flex justify-end gap-2 mt-4">
          <button
            type="button"
            class="px-8 py-2 bg-[#7A7A7A] border-0"
            @click="closeForm()"
          >
            Hủy bỏ
          </button>
          <button type="submit" class="px-8 py-2 bg-[#C80F36] border-0">
            Cập nhật
          </button>
        </div>
      </div>
    </div>

    <div class="w-full bg-linear mt-2">
      <div class="w-full form-title text-white px-4 py-2">
        <div class="flex items-center font-medium justify-between">
          <p>Thông tin Dynamic</p>
          <button type="button" @click="body_form_show2 = !body_form_show2">
            <div class="w-4">
              <icon-tag :name="'thin-down'"></icon-tag>
            </div>
          </button>
        </div>
      </div>
      <div
        class="w-full px-4 py-1 text-white text-left font-magistral_l text-[14px]"
        v-if="body_form_show2"
      >
        <div class="w-full mt-2">
          <p>Được cấp phép</p>
          <select class="form_input_field" v-model="entityData.duoc_cap_phep">
            <option :value="true">Thành công</option>
            <option :value="false">Đang xử lý</option>
          </select>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Ngày xây dựng</p>
            <input
              type="date"
              class="form_input_field"
              v-model="entityData.ngay_xay_dung"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Ngày hoàn thành</p>
            <input
              type="date"
              class="form_input_field"
              v-model="entityData.ngay_hoan_thanh"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Số tầng</p>
            <input
              type="number"
              class="form_input_field"
              v-model="entityData.so_tang"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Diện tích</p>
            <input
              type="text"
              class="form_input_field"
              v-model="entityData.dien_tich"
            />
          </div>
        </div>
        <div class="w-full mt-2">
          <div class="flex justify-between items-center">
            <p>Mật độ</p>
            <input
              type="text"
              class="form_input_field"
              v-model="entityData.mat_do"
            />
          </div>
        </div>

        <div class="w-full flex justify-end gap-2 mt-4">
          <button
            type="button"
            class="px-8 py-2 bg-[#7A7A7A] border-0"
            @click="closeForm()"
          >
            Hủy bỏ
          </button>
          <button type="submit" class="px-8 py-2 bg-[#C80F36] border-0">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<style scoped>
.bg-linear {
  background-image: linear-gradient(
    to left,
    rgba(5, 5, 5, 0.74),
    rgba(5, 5, 5, 0.5)
  );
  .form-title {
    background-image: linear-gradient(
      to right,
      rgba(238, 0, 51, 0.4),
      rgba(0, 0, 0, 0)
    );
  }
  .form_input_field {
    border: none;
    background: none;
    opacity: 100%;
    padding: 0 0;
    text-align: right;
  }
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["entityInfo", "isEditForm"],
  components: { IconTag },
  data() {
    return {
      body_form_show1: true,
      body_form_show2: true,
    };
  },
  computed: {
    entityData: {
      get() {
        return { ...this.entityInfo };
      },
      set(newValue) {
        this.$emit("update:entityInfo", newValue);
      },
    },
    formType: {
      get() {
        return this.isEditForm;
      },
      set(newValue) {
        this.$emit("update:isEditForm", newValue);
      },
    },
  },
  mounted() {},
  methods: {
    submitForm() {
      //console.log("sss", this.entityData);
      this.$emit("submit-form", this.entityData);
    },
    closeForm() {
      this.$emit("close-form");
    },
  },
};
</script>
