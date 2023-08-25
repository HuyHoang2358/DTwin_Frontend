<template>
  <div class="menu bg-gray-500 w-full relative z-40 font-magistral">
    <div class="menu_background z-40">
      <div
        class="menu_content border-b-[3px] border-[#EE0033] p-4 text-white font-magistral_l_i text-xs"
      >
        <div class="grid grid-cols-8 gap-8 h-full">
          <div class="col-span-3 h-full">
            <div class="grid grid-cols-2 gap-4 h-full">
              <div class="col-span-1">
                <div
                  class="h-full flex justify-start items-center content-center font-magistral text-base"
                >
                  <div class="border-r-2 border-white">
                    <div class="flex justify-between items-center px-4">
                      <icon-tag :name="'weather-icon'"></icon-tag>
                      <p class="ml-2">24°C</p>
                    </div>
                  </div>

                  <div class="border-r-2 border-white px-4">
                    <p id="time_header">15:42:36</p>
                  </div>
                  <div class="px-4">
                    <p id="date_time_header">2023/09/01</p>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div class="grid grid-cols-2 gap-8 h-full">
                  <div
                    class="col-span-1"
                    v-for="left_menu in filter_menu_by_position('left')"
                    :key="`menu_item_${left_menu.id}`"
                  >
                    <left-menu-item-button
                      :menu_item="left_menu"
                    ></left-menu-item-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2"></div>

          <div class="col-span-3 h-full">
            <div class="grid grid-cols-2 gap-4 h-full">
              <div class="col-span-1">
                <div class="grid grid-cols-2 gap-8 h-full">
                  <div
                    class="col-span-1"
                    v-for="left_menu in filter_menu_by_position('right')"
                    :key="`menu_item_${left_menu.id}`"
                  >
                    <right-menu-item-button
                      :menu_item="left_menu"
                    ></right-menu-item-button>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div
                  class="h-full flex justify-end items-center content-center text-base"
                >
                  <div class="border-r-2 border-white px-4">
                    <p>VIE</p>
                  </div>
                  <div class="border-r-2 border-white px-4">
                    <p>MP</p>
                  </div>

                  <div class="border-r-2 border-white px-4">
                    <button @click="goToAdmin()">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_14786_474)">
                          <path
                            d="M17.0122 7.0455L15.6022 6.86625C15.486 6.5085 15.3427 6.1635 15.1755 5.83575L16.0462 4.7145C16.3987 4.26075 16.3575 3.62025 15.9547 3.23025L14.7735 2.049C14.3797 1.6425 13.7392 1.602 13.2847 1.95375L12.165 2.8245C11.8372 2.65725 11.4922 2.514 11.1337 2.39775L10.9545 0.99C10.887 0.42525 10.4077 0 9.84 0H8.16C7.59225 0 7.113 0.42525 7.0455 0.98775L6.86625 2.39775C6.50775 2.514 6.16275 2.6565 5.835 2.8245L4.7145 1.95375C4.2615 1.602 3.621 1.6425 3.23025 2.04525L2.049 3.22575C1.6425 3.62025 1.60125 4.26075 1.95375 4.71525L2.8245 5.83575C2.6565 6.1635 2.514 6.5085 2.39775 6.86625L0.99 7.0455C0.42525 7.113 0 7.59225 0 8.16V9.84C0 10.4078 0.42525 10.887 0.98775 10.9545L2.39775 11.1337C2.514 11.4915 2.65725 11.8365 2.8245 12.1642L1.95375 13.2855C1.60125 13.7393 1.6425 14.3798 2.04525 14.7698L3.2265 15.951C3.621 16.3568 4.26075 16.3972 4.71525 16.0455L5.83575 15.1747C6.1635 15.3427 6.5085 15.486 6.86625 15.6015L7.0455 17.0085C7.113 17.5747 7.59225 18 8.16 18H9.84C10.4077 18 10.887 17.5748 10.9545 17.0123L11.1337 15.6022C11.4915 15.486 11.8365 15.3427 12.1642 15.1755L13.2855 16.0462C13.7392 16.3988 14.3797 16.3575 14.7697 15.9548L15.951 14.7735C16.3575 14.379 16.3987 13.7392 16.0462 13.2847L15.1755 12.1642C15.3435 11.8365 15.4867 11.4915 15.6022 11.1337L17.0092 10.9545C17.574 10.887 17.9992 10.4078 17.9992 9.84V8.16C18 7.59225 17.5747 7.113 17.0122 7.0455ZM9 12.75C6.93225 12.75 5.25 11.0677 5.25 9C5.25 6.93225 6.93225 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9C12.75 11.0677 11.0677 12.75 9 12.75Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14786_474">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                  <div class="pl-4">
                    <button>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 0.000366211C4.02996 0.000366211 0 4.02953 0 8.99997C0 13.9704 4.02956 17.9996 9 17.9996C13.9708 17.9996 18 13.9704 18 8.99997C18 4.02953 13.9708 0.000366211 9 0.000366211ZM9 2.69135C10.6446 2.69135 11.9772 4.02439 11.9772 5.66816C11.9772 7.31232 10.6446 8.64497 9 8.64497C7.35623 8.64497 6.02359 7.31232 6.02359 5.66816C6.02359 4.02439 7.35623 2.69135 9 2.69135ZM8.99802 15.6466C7.35781 15.6466 5.85557 15.0493 4.69687 14.0605C4.41461 13.8198 4.25173 13.4668 4.25173 13.0963C4.25173 11.4293 5.60098 10.095 7.26847 10.095H10.7323C12.4002 10.095 13.7443 11.4293 13.7443 13.0963C13.7443 13.4672 13.5822 13.8194 13.2996 14.0601C12.1413 15.0493 10.6386 15.6466 8.99802 15.6466Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-full w-1/4 absolute top-0 menu_logo_area z-50">
      <router-link :to="{ name: 'homepage' }">
        <logo-digital-twin :name="'center-page'"></logo-digital-twin>
      </router-link>
    </div>

    <div
      class="w-1/2 absolute top-0 z-40 mt-28 ml-[25%] text-base font-magistral"
    >
      <div class="flex justify-center">
        <div>
          <div class="grid grid-cols-5 justify-center gap-12">
            <div
              class="col-span-1"
              v-for="index in Math.floor((5 - sub_menu.length) / 2)"
              :key="`sub-menu-item-${index}-tmp`"
            ></div>
            <sub-menu-item
              :sub_menu_item="sub_menu_item"
              v-for="sub_menu_item in sub_menu"
              :key="`sub-menu-item-${sub_menu_item.id}`"
            ></sub-menu-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenuItemButton from "@/components/buttons/LeftMenuItemButton.vue";
import RightMenuItemButton from "@/components/buttons/RightMenuItemButton.vue";
import LogoDigitalTwin from "@/components/LogoDigitalTwin.vue";
import SubMenuItem from "@/components/buttons/SubMenuItem.vue";
import IconTag from "@/components/IconTag.vue";

export default {
  props: [],
  components: {
    IconTag,
    SubMenuItem,
    LogoDigitalTwin,
    RightMenuItemButton,
    LeftMenuItemButton,
  },
  data() {
    return {
      menu_path: null,
      sub_menu_path: null,
      menu: [
        {
          id: "1",
          title1: "Tổng quan",
          title2: "Đô thị",
          routeName: "tongquandothi.tongquan1",
          path: "tong-quan-do-thi",
          position: "left",
          active: false,
          childs: [
            {
              id: "12",
              name: "Tổng quan 01",
              routeName: "tongquandothi.tongquan1",
              path: "tong-quan-1",
              active: false,
            },
            {
              id: "13",
              name: "Tổng quan 02",
              routeName: "#",
              active: false,
            },
            {
              id: "14",
              name: "Tổng quan 03",
              routeName: "#",
              active: false,
            },
          ],
        },
        {
          id: "2",
          title1: "Quy hoạch",
          title2: "Tổng thể",
          routeName: "quyhoachtongthe.tongquan1",
          path: "quy-hoach-tong-the",
          position: "left",
          active: false,
          childs: [
            {
              id: "22",
              name: "Tổng quan 01",
              routeName: "quyhoachtongthe.tongquan1",
              path: "tong-quan-1",
              active: false,
            },
            {
              id: "23",
              name: "Tổng quan 02",
              routeName: "#",
              active: false,
            },
            {
              id: "24",
              name: "Tổng quan 03",
              routeName: "#",
              active: false,
            },
          ],
        },
        {
          id: "3",
          title1: "Quản lý",
          title2: "Hạ tầng Đô thị",
          routeName: "hatangdothi.index",
          path: "ha-tang-do-thi",
          position: "right",
          active: false,
          childs: [
            {
              id: "32",
              name: "Tòa nhà",
              routeName: "hatangdothi.xaydung",
              path: "xay-dung",
              active: false,
            },
            {
              id: "33",
              name: "Phương tiện",
              path: "giao-thong",
              routeName: "#",
              active: false,
            },
            {
              id: "34",
              name: "Cầu đường",
              path: "cap-thoat-nuoc",
              routeName: "#",
              active: false,
            },
            {
              id: "35",
              name: "Cây xanh",
              routeName: "#",
              active: false,
            },
            {
              id: "36",
              name: "Đèn đường",
              path: "den-duong",
              routeName: "#",
              active: false,
            },
          ],
        },
        {
          id: "4",
          title1: "Quản lý",
          title2: "Giao thông",
          routeName: "quanlygiaothong.index",
          position: "right",
          active: false,
          childs: [
            {
              id: "42",
              name: "Tổng quan 01",
              routeName: "#",
              active: false,
            },
            {
              id: "43",
              name: "Tổng quan 02",
              routeName: "#",
              active: false,
            },
            {
              id: "44",
              name: "Tổng quan 03",
              routeName: "#",
              active: false,
            },
          ],
        },
      ],
    };
  },
  created() {
    let path = this.$route.path;
    let path_split_arr = path.split("/");
    path_split_arr = path_split_arr.filter((e) => e.trim() !== "");
    this.menu_path =
      path_split_arr.length >= 1 && path_split_arr[0]
        ? path_split_arr[0]
        : null;
    this.sub_menu_path =
      path_split_arr.length >= 2 && path_split_arr[1]
        ? path_split_arr[1]
        : null;
    //console.log("menu_path", this.menu_path);
    //console.log("sub_menu_path", this.sub_menu_path);

    this.menu.forEach((e) => {
      this.menu_path !== null && e.path === this.menu_path
        ? (e.active = true)
        : (e.active = false);
      e.childs.forEach((e_item) => {
        this.sub_menu_path !== null && e_item.path === this.sub_menu_path
          ? (e_item.active = true)
          : (e_item.active = false);
      });
    });
  },
  computed: {
    sub_menu() {
      if (this.menu_path != null) {
        let choosing_menu = this.menu.filter((e) => e.path === this.menu_path);
        console.log(choosing_menu);
        if (choosing_menu.length > 0) return choosing_menu[0].childs;
      }
      return [];
    },
  },
  methods: {
    filter_menu_by_position(position) {
      return this.menu.filter((e) => e.position === position);
    },
    goToAdmin() {
      this.$router.push({ name: "admin.index" });
    },
  },
};
</script>
