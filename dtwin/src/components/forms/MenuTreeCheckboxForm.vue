<template>
  <div class="w-full">
    <div class="w- full border border-[#E7E7E7] rounded">
      <div class="border-b border-[#E7E7E7] w-full">
        <div class="flex justify-start items-center gap-4 px-4 py-2">
          <input type="checkbox" />
          <p class="#333333">Tất cả</p>
        </div>
      </div>
      <div class="px-4 py-4">
        <div class="flex justify-start items-center gap-4 py-2">
          <button class="w-4 h-4">
            <icon-tag :name="'down'"></icon-tag>
          </button>
          <input type="checkbox" />
          <p class="#333333">Tất cả</p>
        </div>
        <div class="flex justify-start items-center gap-4 py-2">
          <button class="w-4 h-4">
            <icon-tag :name="'down'"></icon-tag>
          </button>
          <input type="checkbox" />
          <p class="#333333">Tất cả</p>
        </div>
        <div class="flex justify-start items-center gap-4 py-2">
          <button class="w-4 h-4">
            <icon-tag :name="'down'"></icon-tag>
          </button>
          <input type="checkbox" />
          <p class="#333333">Tất cả</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTag from "@/components/IconTag.vue";

export default {
  props: [""],
  components: { IconTag },
  data() {
    return {};
  },
  methods: {},
};
</script>
