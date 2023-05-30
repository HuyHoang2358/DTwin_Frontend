<template>
  <div>
    <div
      class="flex items-center w-full border-l-6 border-[#34D399] bg-[#F87171] bg-opacity-[15%] shadow-md text-left p-4"
    >
      <div
        class="mr-5 flex w-full max-w-[36px] justify-center rounded-lg bg-[#F87171] h-8 w-8 p-2"
      >
        <icon-tag :name="'close'"></icon-tag>
      </div>
      <div>
        <h5 class="text-lg font-bold text-[#B45454]">
          {{ title }}
        </h5>
        <p class="text-base leading-relaxed text-body text-[#CD5D5D]">
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import IconTag from "@/components/IconTag";
export default {
  props: ["title", "content"],
  components: { IconTag },
};
</script>
