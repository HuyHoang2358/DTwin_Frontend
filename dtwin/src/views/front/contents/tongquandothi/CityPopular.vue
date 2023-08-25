<template>
  <div class="w-full mt-2">
    <div class="flex justify-end">
      <button
        class="w-10 h-10 bg-[#C80F36] p-3 flex justify-center items-center"
        v-if="!show_box"
        @click="show_box = !show_box"
      >
        <icon-tag :name="'double-chevron-left'"></icon-tag>
      </button>
    </div>

    <LeftBox
      :title="'Mật độ dân số'"
      v-if="show_box"
      @hidden-box="show_box = !show_box"
    >
      <div class="flex justify-center gap-2">
        <div>
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
      </div>
    </LeftBox>
  </div>
</template>

<script>
import LeftBox from "@/components/box/LeftBox.vue";
import IconTag from "@/components/IconTag.vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  props: ["show"],
  components: { IconTag, LeftBox, Bar },
  data() {
    return {
      show_box: this.show,
      chartData: {
        labels: ["0-10", "10-20", "20-30", "30-60", "60-80", ">80"],
        datasets: [
          {
            /* label: "Mật độ dân số 2021",*/
            data: [222209, 283933, 370348, 209864, 86414, 61724],
            backgroundColor: [
              "rgb(225,41,81)",
              "rgb(225,41,81)",
              "rgb(225,41,81)",
              "rgb(225,41,81)",
              "rgb(225,41,81)",
              "rgb(225,41,81)",
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: "white", // Màu của ticks theo chiều x là trắng
            },
          },
          y: {
            ticks: {
              color: "white", // Màu của ticks theo chiều y là trắng
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Không cần cấu hình legend ở đây
          },
        },
      },
    };
  },
  methods: {},
};
</script>
