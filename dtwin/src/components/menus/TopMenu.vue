<template>
  <div
    class="menu bg-gray-500 w-full relative z-40 font-sarabun_regular text-lg text-white"
  >
    <div class="menu_background z-40">
      <div class="menu_content border-b-[3px] border-[#EE0033] px-4 py-3">
        <div class="grid grid-cols-8 gap-8 h-full">
          <!-- Left Top Menu -->
          <div class="col-span-3 h-full">
            <div class="grid grid-cols-2 gap-4 h-full">
              <div class="col-span-1">
                <TopLeftInfo></TopLeftInfo>
              </div>

              <div class="col-span-1">
                <!-- Left Menu Item -->
                <div class="grid grid-cols-2 gap-8 h-full">
                  <div
                    class="col-span-1"
                    v-for="left_menu in filter_menu_by_position('left')"
                    :key="`menu_item_${left_menu.id}`"
                  >
                    <left-menu-item :menu_item="left_menu"></left-menu-item>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-2"></div>

          <!-- Right Top  Menu -->
          <div class="col-span-3 h-full">
            <div class="grid grid-cols-2 gap-4 h-full">
              <div class="col-span-1">
                <!-- Right Menu Item -->
                <div class="grid grid-cols-2 gap-8 h-full">
                  <div
                    class="col-span-1"
                    v-for="left_menu in filter_menu_by_position('right')"
                    :key="`menu_item_${left_menu.id}`"
                  >
                    <right-menu-item :menu_item="left_menu"></right-menu-item>
                  </div>
                </div>
              </div>

              <div class="col-span-1">
                <top-right-info></top-right-info>
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

    <!-- Sub menu -->

    <div
      class="w-1/2 absolute top-0 z-40 mt-24 ml-[25%] text-base font-sarabun_bold_italic"
    >
      <div class="flex justify-center mt-2">
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
import LeftMenuItem from "@/components/menus/LeftMenuItem.vue";
import RightMenuItem from "@/components/menus/RightMenuItem.vue";
import LogoDigitalTwin from "@/components/LogoDigitalTwin.vue";
import SubMenuItem from "@/components/buttons/SubMenuItem.vue";
import TopLeftInfo from "@/components/menus/TopLeftInfo.vue";
import TopRightInfo from "@/components/menus/TopRightInfo.vue";

export default {
  props: [],
  components: {
    TopRightInfo,
    TopLeftInfo,
    SubMenuItem,
    LogoDigitalTwin,
    RightMenuItem,
    LeftMenuItem,
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
  },
};
</script>
