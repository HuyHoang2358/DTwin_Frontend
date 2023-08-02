<template>
  <div class="menu bg-gray-500 w-full relative">
    <div class="menu_background">
      <div class="menu_content border-b-[3px] border-[#EE0033] p-4">
        <div class="grid grid-cols-8 gap-8 h-full">
          <div class="col-span-3 h-full">
            <div class="grid grid-cols-2 gap-4 h-full">
              <div class="col-span-1">
                <div
                  class="h-full flex justify-start items-center content-center text-white font-magistral_l_i text-xs lg:text-sm xl:text-base"
                >
                  <div class="border-r-2 border-white">
                    <div class="flex justify-between px-4">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_14786_454)">
                          <path
                            d="M11.2522 9.57619C12.6688 9.39833 14.0657 9.96845 14.9616 11.072C15.0274 11.1531 15.1447 11.1708 15.229 11.1092C15.6348 10.8127 15.9842 10.4422 16.2582 10.0146C17.9655 7.3507 16.0696 3.75513 12.8304 3.75513C10.7167 3.75513 8.97455 5.37498 8.78065 7.4386C8.77282 7.52196 8.81886 7.60156 8.89545 7.63539C9.77968 8.02648 10.5351 8.67084 11.0657 9.49006C11.106 9.55221 11.1788 9.58538 11.2522 9.57619Z"
                            fill="white"
                          />
                          <path
                            d="M12.83 3.1293C13.1756 3.1293 13.4558 2.84907 13.4558 2.50344V1.25172C13.4558 0.906084 13.1756 0.625854 12.83 0.625854C12.4843 0.625854 12.2041 0.906084 12.2041 1.25172V2.50344C12.2041 2.84907 12.4843 3.1293 12.83 3.1293Z"
                            fill="white"
                          />
                          <path
                            d="M19.4015 7.19739H18.1498C17.8041 7.19739 17.5239 7.47762 17.5239 7.82325C17.5239 8.16888 17.8041 8.44911 18.1498 8.44911H19.4015C19.7472 8.44911 20.0274 8.16888 20.0274 7.82325C20.0274 7.47762 19.7472 7.19739 19.4015 7.19739Z"
                            fill="white"
                          />
                          <path
                            d="M17.0342 11.1424C16.7899 10.898 16.3936 10.898 16.1491 11.1424C15.9047 11.3868 15.9047 11.7831 16.1491 12.0275L17.0342 12.9126C17.1564 13.0348 17.3166 13.0959 17.4768 13.0959C18.0294 13.0959 18.3147 12.4228 17.9193 12.0275L17.0342 11.1424Z"
                            fill="white"
                          />
                          <path
                            d="M8.62603 4.50413C8.87043 4.74857 9.26668 4.74857 9.51112 4.50413C9.75556 4.25969 9.75556 3.86344 9.51112 3.61904L8.62603 2.73396C8.38171 2.48956 7.98542 2.48956 7.74095 2.73396C7.49651 2.9784 7.49651 3.37465 7.74095 3.61904L8.62603 4.50413Z"
                            fill="white"
                          />
                          <path
                            d="M16.5919 4.68748C16.7521 4.68748 16.9122 4.62638 17.0344 4.50415L17.9195 3.61906C18.1639 3.37462 18.1639 2.97837 17.9195 2.73397C17.6751 2.48957 17.2788 2.48953 17.0344 2.73397L16.1494 3.6191C15.7539 4.01453 16.0393 4.68748 16.5919 4.68748Z"
                            fill="white"
                          />
                          <path
                            d="M14.572 14.2384C15.0545 11.8611 12.5649 10.0283 10.4537 11.1116C9.98962 9.58027 8.56735 8.46545 6.88448 8.46545C4.70046 8.46545 2.97621 10.336 3.17038 12.5279C1.39638 12.6665 0 14.1499 0 15.9595C0 17.8553 1.5359 19.4017 3.44224 19.4017H14.6295C16.0554 19.4017 17.2112 18.2459 17.2112 16.82C17.2112 15.4573 16.1389 14.2384 14.572 14.2384Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14786_454">
                            <rect
                              width="20.0276"
                              height="20.0276"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p class="ml-2">24°C</p>
                    </div>
                  </div>
                  <div class="border-r-2 border-white px-4">
                    <p>15:42:36</p>
                  </div>
                  <div class="px-4">
                    <p>2022/07/12</p>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div class="grid grid-cols-2 gap-8 h-full">
                  <div class="col-span-1">
                    <left-menu-item-button
                      :title1="'Tổng quan'"
                      :title2="'Đô thị'"
                    ></left-menu-item-button>
                  </div>
                  <div class="col-span-1">
                    <left-menu-item-button
                      :title1="'Quy hoạch'"
                      :title2="'Tổng thể'"
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
                  <div class="col-span-1">
                    <right-menu-item-button
                      :title1="'Quản lý'"
                      :title2="'Hạ tầng Đô thị'"
                    >
                    </right-menu-item-button>
                  </div>
                  <div class="col-span-1">
                    <right-menu-item-button
                      :title1="'Quản lý'"
                      :title2="'Giao thông'"
                    >
                    </right-menu-item-button>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div
                  class="h-full flex justify-end items-center content-center text-white font-magistral_l_i text-xs lg:text-sm xl:text-base"
                >
                  <div class="border-r-2 border-white px-4">
                    <p>PM 2.3 36</p>
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

    <div class="h-full w-1/4 absolute top-0 menu_logo_area">
      <logo-digital-twin :name="'center-page'"></logo-digital-twin>
    </div>
  </div>
</template>

<script>
import LeftMenuItemButton from "@/components/buttons/LeftMenuItemButton.vue";
import RightMenuItemButton from "@/components/buttons/RightMenuItemButton.vue";
import LogoDigitalTwin from "@/components/LogoDigitalTwin.vue";

export default {
  props: [""],
  components: { LogoDigitalTwin, RightMenuItemButton, LeftMenuItemButton },
  data() {
    return {};
  },
  methods: {
    goToAdmin() {
      this.$router.push({ name: "admin.index" });
    },
  },
};
</script>
