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
      :title="'Số lượng cây xanh'"
      v-if="show_box"
      @hidden-box="show_box = !show_box"
    >
      <div class="flex justify-center gap-2">
        <div>
          <Bar id="tree-chart" :options="chartOptions" :data="chartData" />
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
