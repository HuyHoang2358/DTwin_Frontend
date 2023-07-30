<template>
  <new-main-layout>
    <!-- Table name -->
    <div class="text-[#333333]">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-3xl">User List</p>
        </div>
        <div>
          <div class="flex justify-end gap-4">
            <button
              class="px-4 py-2 border border-[#908E99] text-lg rounded-xl hover:bg-[#908E99]"
            >
              <div class="flex justify-center gap-2 items-center">
                <p>Filters</p>
                <div class="w-4 h-4">
                  <icon-tag :name="'filter'"></icon-tag>
                </div>
              </div>
            </button>

            <button
              class="px-4 py-2 border border-[#908E99] text-lg rounded-xl hover:bg-[#908E99]"
            >
              <div class="flex justify-center gap-2 items-center">
                <p>Add new</p>
                <div class="w-4 h-4">
                  <icon-tag :name="'add-circle'"></icon-tag>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Table content -->
    <div class="w-full mt-6 border border-[#ECEFF4] rounded">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-[#F3F5F8] text-center">
            <th class="py-2">#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center text-base">
            <td class="py-4 px-2">1</td>
            <td>Hoang Huy Hoang</td>
            <td>hoanghh12@viettel.com.vn</td>
            <td>
              1 lane 203 Huu Hung Street, Tay Mo Ward, Nam Tu Liem District,
              Hanoi
            </td>
            <td>0962210490</td>
            <td>
              <div class="flex justify-center items-center gap-4">
                <button class="p-2 bg-[#F1F1F2] rounded">
                  <div class="w-4 h-4">
                    <icon-tag :name="'edit-square'"></icon-tag>
                  </div>
                </button>
                <button class="p-2 bg-[#F1F1F2] rounded">
                  <div class="w-4 h-4">
                    <icon-tag :name="'red-delete'"></icon-tag>
                  </div>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Table end note -->
    <div class="w-full flex justify-end gap-8 mt-2 text-sm">
      <div>
        <p>Số dòng trên trang: 10</p>
      </div>
    </div>
  </new-main-layout>
</template>

<script>
import NewMainLayout from "@/views/admin/layouts/NewMainLayout.vue";
import IconTag from "@/components/IconTag.vue";

export default {
  props: [""],
  components: { IconTag, NewMainLayout },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
