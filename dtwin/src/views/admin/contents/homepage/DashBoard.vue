<template>
  <NewMainLayout :is_page="is_page">
    <div>
      <h1>Dash board</h1>
    </div>
  </NewMainLayout>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
export default {
  props: [""],
  components: { NewMainLayout },
  data() {
    return {
      is_page: "Dashboard",
    };
  },
  methods: {},
};
</script>
