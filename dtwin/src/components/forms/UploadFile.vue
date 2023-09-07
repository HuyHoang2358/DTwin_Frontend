<template>
  <div>
    <button
      class="add_map_button w-full border-dashed border border-[#808080] py-1"
      @click="openFileInput"
      v-if="!uploaded_file"
    >
      <div class="flex justify-center items-center gap-2">
        <div class="w-4 h-4 text-[#C80F36]">
          <icon-tag :name="'upload-file'"></icon-tag>
        </div>
        <p>Chọn file tải lên</p>
      </div>
    </button>

    <div class="w-full" v-else>
      <div class="w-full flex justify-between items-center gap-4">
        <div class="flex justify-start items-end">
          <div class="w-8 h-8">
            <icon-tag :name="'dat-file'"> </icon-tag>
          </div>
          <p>{{ filename }}</p>
        </div>

        <button class="w-5 h-5" @click="cancelUploadFile">
          <icon-tag :name="'circle-cancel'"></icon-tag>
        </button>
      </div>
      <div class="h-1 w-full rounded bg-[#EE0033] mt-2"></div>
    </div>
    <div class="w-full mt-2" v-if="error_message">
      <div class="w-full flex justify-between items-center gap-4">
        <div class="flex justify-start items-end">
          <div class="w-8 h-8">
            <icon-tag :name="'dat-file'"> </icon-tag>
          </div>
          <p class="text-[#EE0033]">{{ error_message }}</p>
        </div>

        <button class="w-5 h-5" @click="cancelUploadFile">
          <icon-tag :name="'circle-cancel'"></icon-tag>
        </button>
      </div>
      <div class="h-1 w-full rounded bg-[#D9D9D9] mt-1.5">
        <div class="w-2/3 h-full bg-[#EE0033]"></div>
      </div>
    </div>

    <input
      type="file"
      ref="fileInput"
      style="display: none"
      @change="handleFileChange"
    />
  </div>
</template>
<style scoped>
.add_map_button {
  background-image: url("../../../public/images/background/black_opacity_1.png");
  background-repeat: repeat;
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["fileType"],
  components: { IconTag },
  data() {
    return {
      selectedFile: null,
      filename: "",
      uploaded_file: false,
      error_message: null,
    };
  },
  methods: {
    validate_file() {
      if (this.selectedFile) {
        const uploaded_file_extension = this.selectedFile.name
          .split(".")
          .pop()
          .toUpperCase();
        //console.log("type", uploaded_file_extension);
        if (this.fileType === uploaded_file_extension) return true;
        else {
          this.error_message = `Sai định dạng ${this.fileType}`;
        }
      }
      return false;
    },
    openFileInput() {
      this.error_message = null;
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      if (this.validate_file()) {
        this.filename = this.selectedFile.name;
        this.uploaded_file = true;
        this.$emit("upload-file", [this.selectedFile, this.fileType]);
      }
    },
    cancelUploadFile() {
      this.selectedFile = null;
      this.filename = "";
      this.uploaded_file = false;
      this.error_message = null;
      this.$emit("upload-file", [this.selectedFile, this.fileType]);
    },
  },
};
</script>
