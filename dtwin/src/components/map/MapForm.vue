<template>
  <div class="absolute top-0 w-full">
    <div class="flex justify-center items-center h-full">
      <div class="w-5/6 relative mt-20">
        <div class="w-full h-full p-4">
          <form
            class="w-full h-full text-white map_form"
            v-on:submit.prevent="submitForm"
          >
            <div
              class="map_form_title pt-2 pb-3 text-xl font-sarabun_bold_italic relative"
            >
              {{ isEditing ? "Chỉnh sửa bản đồ" : "Thêm bản đồ mới" }}
              <div class="absolute w-6 top-0 right-0 h-full mr-4">
                <div class="flex justify-center items-center h-full">
                  <button class="w-5 h-5" type="button" @click="close_form()">
                    <icon-tag :name="'close-thin'"></icon-tag>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="w-full px-16 pb-2 text-base font-sarabun_regular text-left"
            >
              <div class="w-full grid grid-cols-4 gap-12">
                <div class="col-span-1">
                  <div class="form_field mt-2">
                    <p>Tên nhóm bản đồ</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Tên bản đồ</p>
                    <input
                      type="text"
                      class="map_form_input px-4 py-2 w-full mt-1"
                      placeholder="Nhập tên bản đồ"
                    />
                  </div>
                  <div class="form_field mt-2">
                    <p>Key bản đồ</p>
                    <input
                      type="text"
                      class="map_form_input px-4 py-2 w-full mt-1"
                      placeholder="Nhập tên bản đồ"
                    />
                  </div>
                  <div class="form_field mt-2">
                    <p>Dịch vụ web OGC</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Loại bản đồ</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Màu viền</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="form_field mt-2">
                    <p>Màu nền</p>
                    <input
                      type="text"
                      class="map_form_input px-4 py-2 w-full mt-1"
                      placeholder="Nhập tên bản đồ"
                    />
                  </div>
                  <div class="form_field mt-2">
                    <p>Độ dày viền</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Độ trong suốt</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Thứ tự hiển thị bản đồ</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Hiển thị bản đồ mặc định</p>
                    <div class="px-4 py-2 w-full mt-1 grid grid-cols-2 gap 8">
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-checked'"></icon-tag>
                          </button>
                          <p>Sử dụng</p>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-uncheck'"></icon-tag>
                          </button>
                          <p>Không sử dụng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form_field mt-2">
                    <p>Thứ tự ưu tiên</p>
                    <input
                      type="text"
                      class="map_form_input px-4 py-2 w-full mt-1"
                      placeholder="00"
                    />
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="form_field mt-2">
                    <p>Hiển thị nhãn</p>
                    <div class="px-4 py-2 w-full mt-1 grid grid-cols-2 gap 8">
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-checked'"></icon-tag>
                          </button>
                          <p>Hiển thị</p>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-uncheck'"></icon-tag>
                          </button>
                          <p>Không hiển thị</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form_field mt-2">
                    <p>Hệ tọa độ</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>

                  <div class="form_field mt-2">
                    <p>Chế độ chia sẻ</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Đơn vị xây dựng bản đồ</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>
                  <div class="form_field mt-2">
                    <p>Nguồn cung cấp</p>
                    <input
                      type="text"
                      class="map_form_input px-4 py-2 w-full mt-1"
                      placeholder="Nhập tên bản đồ"
                    />
                  </div>
                  <div class="form_field mt-2">
                    <p>Mô tả</p>
                    <input
                      type="text"
                      class="map_form_input px-4 py-2 w-full mt-1"
                      placeholder="Nhập tên bản đồ"
                    />
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="form_field mt-2">
                    <p>Sử dụng cache</p>
                    <div class="px-4 py-2 w-full mt-1 grid grid-cols-2 gap 8">
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-checked'"></icon-tag>
                          </button>
                          <p>Sử dụng</p>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-uncheck'"></icon-tag>
                          </button>
                          <p>Không sử dụng</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form_field mt-2">
                    <p>Shape Type</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>

                  <div class="form_field mt-2">
                    <p>Trạng thái bản đồ</p>
                    <div class="px-4 py-2 w-full mt-1 grid grid-cols-2 gap 8">
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-checked'"></icon-tag>
                          </button>
                          <p>Sử dụng</p>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="flex justify-start items-center gap-2">
                          <button class="w-4 h-4">
                            <icon-tag :name="'circle-uncheck'"></icon-tag>
                          </button>
                          <p>Không sử dụng</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form_field mt-2">
                    <p>Mã file SHP</p>
                    <select class="map_form_input px-4 py-2 w-full mt-1">
                      <option>Chọn</option>
                      <option>Chọn 1</option>
                      <option>Chọn 2</option>
                      <option>Chọn 3</option>
                    </select>
                  </div>

                  <div class="form_field mt-2">
                    <p>Thời gian tạo bản đồ</p>
                    <input
                      type="datetime-local"
                      class="map_form_input px-4 py-2 w-full mt-1"
                    />
                  </div>
                  <div class="form_field mt-2">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="col-span-1">
                        <p>Từ ngày</p>
                        <input
                          type="date"
                          class="map_form_input px-4 py-2 w-full mt-1"
                        />
                      </div>
                      <div class="col-span-1">
                        <p>Đến ngày</p>
                        <input
                          type="date"
                          class="map_form_input px-4 py-2 w-full mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <p class="font-sarabun_medium_italic text-lg">File bản đồ</p>
                <div
                  class="font-sarabun_bold_italic text-lg w-full flex justify-start items-center"
                >
                  <button class="bg-[#C80F36] px-4 pt-1 pb-2">
                    <div class="flex justify-start items-center gap-2">
                      <div class="w-4 h-4">
                        <icon-tag :name="'double-chevron-right'"></icon-tag>
                      </div>
                      <p>ShapeFile</p>
                    </div>
                  </button>
                  <button class="map_form_info px-4 pt-1 pb-2">
                    <div class="flex justify-start items-center gap-2">
                      <div class="w-4 h-4">
                        <icon-tag :name="'double-chevron-right'"></icon-tag>
                      </div>
                      <p>Mapinfo</p>
                    </div>
                  </button>
                </div>
                <div
                  class="map_form_info px-12 py-2 grid grid-cols-5 gap-8 font-sarabun_light"
                >
                  <div class="col-span-1">
                    <div class="form_field">
                      <p>File DAT</p>
                      <div>
                        <upload-file
                          :file-type="'DAT'"
                          @upload-file="uploadFile"
                        ></upload-file>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="form_field">
                      <p>File ID</p>
                      <div>
                        <upload-file
                          :file-type="'ID'"
                          @upload-file="uploadFile"
                        ></upload-file>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="form_field">
                      <p>File MAP</p>
                      <div>
                        <upload-file
                          :file-type="'MAP'"
                          @upload-file="uploadFile"
                        ></upload-file>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="form_field">
                      <p>File TAB</p>
                      <div>
                        <upload-file
                          :file-type="'TAB'"
                          @upload-file="uploadFile"
                        ></upload-file>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full mt-2">
                <div class="flex justify-end gap-4">
                  <gray-button
                    :title="'Hủy bỏ'"
                    @click-button="close_form()"
                  ></gray-button>
                  <RedButton :title="'Tải lên'"></RedButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.map_form_title {
  background-image: url("../../../public/images/background/map_form_title.png");
  background-repeat: repeat;
}
.map_form {
  background-image: url("../../../public/images/background/map_form.png");
  background-repeat: repeat;
}
.map_form_input {
  background-color: rgba(5, 5, 5, 0.58);
  border: none;
}
.map_form_info {
  background-color: rgba(5, 5, 5, 0.48);
  border: none;
}
</style>
<script>
import IconTag from "@/components/IconTag.vue";
import GrayButton from "@/components/buttons/GrayButton.vue";
import RedButton from "@/components/buttons/RedButton.vue";
import UploadFile from "@/components/forms/UploadFile.vue";

export default {
  props: {
    isEditing: {
      type: Boolean,
      default: false,
    },
    formData: {
      type: Object,
      default: () => ({
        datFile: null,
        idFile: null,
        mapFile: null,
        tabFile: null,
        mapInfo: JSON.stringify({
          layerGroupName: "test",
          layerName: "khanh hoa",
          serviceType: "test1",
          layerType: "50000",
          outlineColor: "RGB",
          fillColor: "RGB",
          outlineThickness: 12,
          transparent: 12,
          layerDisplayOrder: 1,
          defaultDisplay: true,
          labelDisplay: true,
          zIndex: 12,
          coordinate: "213",
          shareType: "123",
          useCache: true,
          available: true,
          description: "test123",
          shapeEncoding: "123",
          timeCreate: "12/12/2022",
          validity: "test123",
          office: "test123",
          mapProvider: "vtcc",
        }),
      }),
    },
  },
  components: { UploadFile, RedButton, GrayButton, IconTag },
  data() {
    return {
      form: { ...this.formData },
    };
  },
  computed: {},
  created() {},
  methods: {
    validateForm() {
      return !!(
        this.form.datFile &&
        this.form.idFile &&
        this.form.mapFile &&
        this.form.tabFile
      );
    },
    uploadFile([uploaded_file, file_type]) {
      console.log(uploaded_file);
      console.log(file_type);
      switch (file_type) {
        case "DAT":
          this.form.datFile = uploaded_file ? uploaded_file : null;
          break;
        case "ID":
          this.form.idFile = uploaded_file ? uploaded_file : null;
          break;
        case "MAP":
          this.form.mapFile = uploaded_file ? uploaded_file : null;
          break;
        case "TAB":
          this.form.tabFile = uploaded_file ? uploaded_file : null;
          break;
        default:
          break;
      }
      console.log(this.form);
    },
    submitForm() {
      if (this.validateForm()) this.$emit("submit-form", this.form);
    },

    close_form() {
      this.$emit("close-form");
    },
  },
};
</script>
