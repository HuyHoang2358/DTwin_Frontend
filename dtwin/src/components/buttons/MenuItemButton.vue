<template>
  <div class="w-full h-full">
    <button class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="147"
        height="53"
        fill="none"
        viewBox="0 0 147 53"
      >
        <g opacity=".9">
          <path
            fill="url(#a)"
            d="M1 40.854V12.146c0-.351.14-.688.388-.937l9.821-9.821c.249-.248.586-.388.937-.388h122.098c.351 0 .688.14.936.388l9.822 9.821c.248.249.388.586.388.937v28.708c0 .351-.14.688-.388.937l-9.822 9.821a1.323 1.323 0 0 1-.936.388H12.146c-.351 0-.688-.14-.937-.388l-9.821-9.821A1.325 1.325 0 0 1 1 40.854Z"
          />
          <path
            fill="url(#b)"
            fill-opacity=".2"
            d="M1 40.854V12.146c0-.351.14-.688.388-.937l9.821-9.821c.249-.248.586-.388.937-.388h122.098c.351 0 .688.14.936.388l9.822 9.821c.248.249.388.586.388.937v28.708c0 .351-.14.688-.388.937l-9.822 9.821a1.323 1.323 0 0 1-.936.388H12.146c-.351 0-.688-.14-.937-.388l-9.821-9.821A1.325 1.325 0 0 1 1 40.854Z"
          />
        </g>
        <path
          stroke="#BF0D33"
          stroke-width="2"
          d="m134.792 52 10.209-10.21c.249-.248.388-.585.388-.936V12.146c0-.351-.139-.688-.388-.937L134.792 1M11.598 52 1.388 41.79A1.325 1.325 0 0 1 1 40.855V12.146c0-.351.14-.688.388-.937L11.598 1"
          opacity=".9"
        />
        <path
          stroke="#BE2247"
          stroke-width=".75"
          d="M5.75 32.125 11 27.25l-5.25-4.875"
        />
        <path fill="#BE2247" d="M9.5 27.25 2 20.5V34l7.5-6.75Z" />
        <path
          stroke="#BE2247"
          stroke-width=".75"
          d="M141.25 22.375 136 27.25l5.25 4.875"
        />
        <path fill="#BE2247" d="M137.5 27.25 145 34V20.5l-7.5 6.75Z" />
        <defs>
          <linearGradient
            id="a"
            x1="95.646"
            x2="101.659"
            y1="62.315"
            y2="1.46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1D1D1D" />
            <stop offset="1" stop-color="#343434" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="30.775"
            x2="-52.052"
            y1="85.5"
            y2="-14.621"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E20439" stop-opacity=".51" />
            <stop offset="1" stop-color="#373737" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div
        class="absolute top-0 h-full w-full text-center flex justify-center items-center"
      >
        <p class="text-white">{{ menu_item.name }}</p>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  props: ["menu_item"],
  components: {},
  computed: {},
};
</script>
