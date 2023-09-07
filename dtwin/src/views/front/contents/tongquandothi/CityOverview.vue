<template>
  <div class="w-full mt-2">
    <right-box :title="'Thông tin thành phố'" :is_show="show">
      <div class="flex justify-center gap-2">
        <drop-down-box :title="null" :icon="null" :have_body="true">
          <div
            class="flex justify-between items-center text-base mt-1"
            v-for="(info, index) in abstract_info"
            :key="`abstract-info-${index}`"
          >
            <p class="font-sarabun_regular">{{ info.key }}</p>
            <p class="font-sarabun_extra_light">{{ info.value }}</p>
          </div>
        </drop-down-box>
      </div>
    </right-box>
  </div>
</template>

<script>
import DropDownBox from "@/components/box/DropDownBox.vue";
import RightBox from "@/components/box/RightBox.vue";
export default {
  props: ["show"],
  components: { RightBox, DropDownBox },
  data() {
    return {
      abstract_info: [
        {
          key: "Diện tích",
          value: "211,56 km²",
        },
        {
          key: "Dân số",
          value: "1.234.495 người",
        },
        {
          key: "Mật độ dân số",
          value: "4,792 người/km²",
        },
        {
          key: "GDP",
          value: "452.7 nghìn tỷ VNĐ",
        },
        {
          key: "GDP bình quân",
          value: "445 triệu VNĐ",
        },
        {
          key: "Số phường",
          value: "34 phường",
        },
        {
          key: "Mật độ xây dựng",
          value: "28 %",
        },
        {
          key: "Mật độ cây xanh",
          value: "1,05 %",
        },
      ],
    };
  },
  methods: {},
};
</script>
