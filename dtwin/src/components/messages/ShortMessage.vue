<template>
  <RouterLink to="#" class="w-full">
    <div class="w-full flex justify-start items-center gap-2">
      <div class="flex w-12 h-12">
        <div class="w-full h-full" v-if="type === 'chat'">
          <circle-image :img_url="img_url"></circle-image>
        </div>
        <div class="w-full h-full bg-[#F8F8F8] rounded-full p-3" v-else>
          <icon-tag :name="'red-bell'"></icon-tag>
        </div>
      </div>
      <div class="flex-grow">
        <p class="font-bold text-[#201C1D] text-base text-left">{{ title }}</p>
        <p class="text-sm text-[#494747] text-left">{{ message }}</p>
      </div>
      <div class="flex w-12">
        <p class="text-sm text-[#A3A3A3] text-right align-text-bottom">
          {{ time }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
<script>
import CircleImage from "@/components/images/CircleImage.vue";
import IconTag from "@/components/IconTag.vue";

export default {
  components: { IconTag, CircleImage },
  props: ["type", "img_url", "title", "message", "time"],
};
</script>
