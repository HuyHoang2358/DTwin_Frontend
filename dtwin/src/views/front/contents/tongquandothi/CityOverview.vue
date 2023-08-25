<template>
  <div class="w-full mt-2">
    <div class="flex justify-end">
      <button
        class="w-10 h-10 bg-[#C80F36] p-3 flex justify-center items-center"
        v-if="!show_box"
        @click="show_box = !show_box"
      >
        <icon-tag :name="'double-chevron-left'"></icon-tag>
      </button>
    </div>

    <LeftBox
      :title="'Thông tin thành phố'"
      v-if="show_box"
      @hidden-box="show_box = !show_box"
    >
      <div class="flex justify-center gap-2">
        <drop-down-box :title="null" :icon="null">
          <div
            class="flex justify-between items-center text-base mt-1"
            v-for="(info, index) in abstract_info"
            :key="`abstract-info-${index}`"
          >
            <p>{{ info.key }}</p>
            <p>{{ info.value }}</p>
          </div>
        </drop-down-box>
      </div>
    </LeftBox>
  </div>
</template>

<script>
import LeftBox from "@/components/box/LeftBox.vue";
import IconTag from "@/components/IconTag.vue";
import DropDownBox from "@/components/box/DropDownBox.vue";
export default {
  props: ["show"],
  components: { DropDownBox, IconTag, LeftBox },
  data() {
    return {
      show_box: this.show,
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
