<template>
  <MainLayout>
    <div>
      <div class="rounded-sm border border-stroke bg-white drop-shadow-xl">
        <div class="py-6 px-6 border-b-[1px] border-stroke">
          <div class="flex justify-between">
            <h4 class="text-xl font-bold text-black text-left">Right List</h4>
          </div>
        </div>
        <div class="border-b-[1px] border-stroke px-6 pb-2"></div>
        <div class="max-w-full overflow-x-auto p-6">
          <table class="w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-center">
                <th class="py-4 px-4 font-normal text-black xl:pl-11">
                  Right ID
                </th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">
                  Right Name
                </th>
                <th class="py-4 px-4 font-normal text-black xl:pl-11">
                  Sort Order
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="right in rights"
                :key="right.rightId"
                class="hover:bg-gray-100"
              >
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ right.rightId }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ right.rightName }}
                  </p>
                </td>
                <td class="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11">
                  <p class="font-normal text-black text-left text-base">
                    {{ right.sortOrder }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/views/admin/layouts/MainLayout";
import axios from "axios";

import { API_DOMAIN, API_GET_RIGHTS, headers } from "@/config";

export default {
  props: [""],
  components: { MainLayout },
  data() {
    return {
      rights: [
        {
          rightId: "",
          rightName: "",
          sortOrder: "",
        },
      ],
    };
  },
  created() {
    this.getALlRights();
  },
  methods: {
    getALlRights() {
      const endpoint = API_DOMAIN + API_GET_RIGHTS;
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.rights = response.data.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
