<template>
  <div class="w-full mt-2">
    <RightBox
      :title="'Số lượng cây xanh'"
      v-if="show_box"
      @hidden-box="show_box = !show_box"
    >
      <div class="flex justify-center gap-2">
        <div>
          <Bar id="tree-chart" :options="chartOptions" :data="chartData" />
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
      show_box: this.show,
      chartData: {
        labels: ["cây tiểu mộc", "cây trung mộc", "cây đại mộc"],
        datasets: [
          {
            label: "Số lượng cây xanh: 952",
            data: [647, 190, 115],
            backgroundColor: ["rgb(0,255,0)", "rgb(0,255,0)", "rgb(0,255,0)"],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: "white",
            },
          },
          y: {
            ticks: {
              color: "white",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
            color: "white",
          },
        },
      },
    };
  },
  methods: {},
};
</script>
