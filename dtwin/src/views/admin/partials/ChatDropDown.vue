<template>
  <drop-down :title="'Chat'">
    <div class="w-full">
      <search-form
        :placeholder="'Search'"
        @searching="search_chat"
      ></search-form>
      <div class="mt-4">
        <div
          class="mt-8"
          v-for="(message, index) in messages"
          :key="`chat-message-item-${index}`"
        >
          <ShortMessage
            :type="'chat'"
            :title="message.title"
            :message="message.content"
            :img_url="message.img_url"
            :time="message.time"
          >
          </ShortMessage>
        </div>
      </div>
    </div>
  </drop-down>
</template>

<script>
import DropDown from "@/components/DropDown.vue";
import SearchForm from "@/components/forms/SearchForm.vue";
import ShortMessage from "@/components/messages/ShortMessage.vue";
export default {
  props: [""],
  components: { ShortMessage, SearchForm, DropDown },
  data() {
    return {
      messages: [
        {
          img_url: "/samples/avatar_1.png",
          title: "VT12358HG",
          content: "Thêm thông tin cho toà ..",
          time: "12:23",
        },
        {
          img_url: "/samples/avatar_1.png",
          title: "VT12358HG",
          content: "Thêm thông tin cho toà ..",
          time: "12:23",
        },
        {
          img_url: "/samples/avatar_1.png",
          title: "VT12358HG",
          content: "Thêm thông tin cho toà ..",
          time: "12:23",
        },
      ],
    };
  },
  methods: {
    search_chat(text) {
      console.log(text);
    },
  },
};
</script>
