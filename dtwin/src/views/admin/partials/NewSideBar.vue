<template>
  <div class="flex w-1/6 bg-[#201C1D]">
    <div class="flex flex-col w-full h-full">
      <div class="w-full">
        <logo-digital-twin :name="'sidebar-page'"></logo-digital-twin>
      </div>
      <div class="flex-grow w-full">
        <nav class="mt-24 p-0">
          <div
            v-for="(sidebarMenuItem, index) in sidebar_menu"
            :key="`sidebar-menu-item-${index}`"
            class="relative"
          >
            <router-link
              class="w-full"
              :to="{ name: sidebarMenuItem.route_name }"
            >
              <div
                class="flex justify-start gap-4 w-full pl-8 mt-4 py-4"
                v-bind:class="
                  sidebarMenuItem.name === is_page
                    ? 'text-[#EE0033]'
                    : 'text-white'
                "
              >
                <div class="w-6 h-6">
                  <icon-tag :name="sidebarMenuItem.icon_name"></icon-tag>
                </div>

                <p class="text-lg font-normal">
                  {{ sidebarMenuItem.name }}
                </p>
              </div>
            </router-link>

            <!--  Button active -->
            <div
              class="absolute w-full h-full top-0 left-0"
              v-if="sidebarMenuItem.name === is_page"
            >
              <svg
                class="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g filter="url(#a)" shape-rendering="crispEdges">
                  <path fill="url(#b)" d="M0 0h308v64H0z" />
                  <path stroke="url(#c)" d="M.5.5h307v63H.5z" />
                </g>
                <g filter="url(#d)"><path fill="#E03" d="M0 0h8v64H0z" /></g>
                <path
                  stroke="#E03"
                  stroke-width=".75"
                  d="M11.75 37.083 17 29.5l-5.25-7.583"
                />
                <path fill="#E03" d="M15.5 29.5 8 19v21l7.5-10.5Z" />
                <defs>
                  <linearGradient
                    id="b"
                    x1="0"
                    x2="307.949"
                    y1="32"
                    y2="39.18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2F2E35" />
                    <stop offset="1" stop-color="#222127" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="0"
                    x2="313.018"
                    y1="0"
                    y2="59.681"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E03" />
                    <stop offset="1" stop-opacity="0" />
                  </linearGradient>
                  <filter
                    id="a"
                    width="329.888"
                    height="83.898"
                    x="0"
                    y="0"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="11.939" dy="9.949" />
                    <feGaussianBlur stdDeviation="4.975" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      values="0 0 0 0 0.979167 0 0 0 0 0.979167 0 0 0 0 0.979167 0 0 0 0.5 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="multiply"
                      result="effect1_dropShadow_18207_2150"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_18207_2150"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="d"
                    width="29.888"
                    height="83.898"
                    x="0"
                    y="0"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dx="11.939" dy="9.949" />
                    <feGaussianBlur stdDeviation="4.975" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      values="0 0 0 0 0.979167 0 0 0 0 0.979167 0 0 0 0 0.979167 0 0 0 0.5 0"
                    />
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="multiply"
                      result="effect1_dropShadow_18207_2150"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_18207_2150"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import LogoDigitalTwin from "@/components/LogoDigitalTwin.vue";
import IconTag from "@/components/IconTag.vue";

export default {
  props: ["is_page"],
  components: { IconTag, LogoDigitalTwin },
  data() {
    return {
      sidebar_menu: [
        {
          name: "Dashboard",
          route_name: "admin.index",
          icon_name: "sidebar-dashboard",
        },
        {
          name: "User",
          route_name: "admin.user.index",
          icon_name: "sidebar-user",
        },
        {
          name: "Menu",
          route_name: "admin.menu.index",
          icon_name: "sidebar-menu",
        },
        {
          name: "Role",
          route_name: "admin.role.index",
          icon_name: "sidebar-role",
        },
        {
          name: "Right",
          route_name: "admin.right.index",
          icon_name: "sidebar-right",
        },
      ],
    };
  },
  methods: {},
};
</script>
