<template>
  <div class="w-full mt-2">
    <RightBox :is_show="show" :title="'Mật độ dân số'">
      <div class="flex justify-center gap-2">
        <div>
          <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
      </div>
    </RightBox>
  </div>
</template>

<script>
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
import RightBox from "@/components/box/RightBox.vue";

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
  components: { RightBox, Bar },
  data() {
    return {
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
