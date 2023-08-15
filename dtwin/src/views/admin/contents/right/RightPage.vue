<template>
  <div>
    <new-main-layout :is_page="is_page">
      <!-- Table name -->
      <div class="text-[#333333]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-3xl">Danh sách phân quyền</p>
          </div>
        </div>
      </div>
      <!-- Table content -->
      <div class="w-full mt-6 border border-[#ECEFF4] rounded">
        <table class="w-full table-auto">
          <thead>
            <tr class="bg-[#F3F5F8] text-left">
              <th class="py-2 text-center">STT</th>
              <th>ID</th>
              <th>Tên quyền</th>
              <!--              <th>Thứ tự</th>-->
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-left text-base"
              v-for="(right, index) in rights"
              :key="`right-list-${right.rightId}`"
            >
              <td class="py-4 px-2 text-center">
                {{ index + 1 }}
              </td>
              <td>{{ right.rightId }}</td>
              <td>{{ right.rightName }}</td>
              <!--              <td>
                {{ right.sortOrder }}
              </td>-->
            </tr>
          </tbody>
        </table>
      </div>
    </new-main-layout>
  </div>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
import RIGHT_API from "@/apis/modules/right";

export default {
  props: [""],
  components: { NewMainLayout },
  data() {
    return {
      is_page: "Right",
      rights: [
        {
          rightId: "",
          rightName: "",
          sortOrder: "",
        },
      ],
    };
  },
  computed: {},
  created() {
    this.get_all_rights();
  },
  methods: {
    async get_all_rights() {
      try {
        let response = await RIGHT_API.get_rights();
        console.log(response);
        this.rights = response.data.data;
      } catch (e) {
        console.log("ERR: ", e);
      }
    },
  },
};
</script>
