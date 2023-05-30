<template>
  <div>
    <div
      class="flex items-center w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] shadow-md text-left p-4"
    >
      <div
        class="mr-5 flex w-full max-w-[36px] justify-center rounded-lg bg-[#34D399] h-8 w-8 p-2"
      >
        <icon-tag :name="'success'"></icon-tag>
      </div>
      <div>
        <h5 class="text-lg font-bold text-[#34D399]">
          {{ title }}
        </h5>
        <p class="text-base leading-relaxed text-body">
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
