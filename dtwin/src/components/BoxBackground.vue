<template>
  <div>
    <!-- User Icon -->
    <svg
      v-if="name === 'left-menu-item'"
      class="fill-current w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      width="177"
      height="53"
      fill="none"
      viewBox="0 0 177 53"
    >
      <path
        fill="url(#a)"
        d="M.831 2.488A1 1 0 0 1 1.704 1h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H29.086a1 1 0 0 1-.872-.512L.83 2.488Z"
      />
      <path
        fill="url(#b)"
        fill-opacity=".2"
        d="M.831 2.488A1 1 0 0 1 1.704 1h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H29.086a1 1 0 0 1-.872-.512L.83 2.488Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="116.022"
          x2="120.943"
          y1="62.315"
          y2="1.263"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D1D1D" />
          <stop offset="1" stop-color="#343434" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="36.5"
          x2="-41.696"
          y1="85.5"
          y2="-30.371"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E20439" />
          <stop offset="1" stop-color="#373737" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="113"
          x2="38.806"
          y1="61"
          y2="-17.568"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E00036" />
          <stop offset="1" stop-color="#373737" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      v-else-if="name === 'left-menu-item-active'"
      class="fill-current w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 185 61"
    >
      <path
        fill="url(#a)"
        d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
      />
      <path
        fill="url(#b)"
        fill-opacity=".2"
        d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
      />
      <path
        fill="url(#c)"
        fill-opacity=".2"
        d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
      />
      <g stroke="#E03" filter="url(#d)" style="mix-blend-mode: screen">
        <path
          d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
        />
        <path
          d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
        />
      </g>
      <g stroke="#E03" filter="url(#e)" style="mix-blend-mode: screen">
        <path
          d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
        />
        <path
          d="M4.831 6.488A1 1 0 0 1 5.704 5h146.209a1 1 0 0 1 .873.512l27.383 49a1 1 0 0 1-.873 1.488H33.086a1 1 0 0 1-.872-.512l-27.383-49Z"
        />
      </g>
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-77.5 -3.50028 13.77114 -304.90817 92 23.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#373737" stop-opacity="0" />
          <stop offset="1" stop-color="#F0043D" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 55 -190.882 0 92 26.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#CA1C46" stop-opacity=".46" />
          <stop offset=".521" stop-color="#E40A18" />
        </radialGradient>
        <filter
          id="d"
          width="184.596"
          height="60"
          x=".202"
          y=".5"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_14786_424"
            stdDeviation="2"
          />
        </filter>
        <filter
          id="e"
          width="184.596"
          height="60"
          x=".202"
          y=".5"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_14786_424"
            stdDeviation="2"
          />
        </filter>
        <linearGradient
          id="a"
          x1="120.022"
          x2="124.943"
          y1="66.315"
          y2="5.263"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D1D1D" />
          <stop offset="1" stop-color="#343434" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  props: ["name"],
};
</script>
