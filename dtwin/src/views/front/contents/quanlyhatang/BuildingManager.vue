<template>
  <div class="w-full mt-2">
    <RightBox
      :title="'Số lượng nhà'"
      v-if="show_box"
      @hidden-box="show_box = !show_box"
    >
      <div class="flex justify-start gap-2">
        <div class="text-left">
          <Pie id="building-chart" :options="chartOptions" :data="chartData" />
        </div>
      </div>
    </RightBox>
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import RightBox from "@/components/box/RightBox.vue";

ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  props: ["show"],
  components: { RightBox, Pie },
  data() {
    return {
      show_box: this.show,
      chartData: {
        labels: [
          "Công trình nhà ở",
          "Công trình giáo dục",
          "Công trình y tế",
          "Công trình thể thao",
          "Công trình văn hóa",
          "Công trình tôn giáo",
          "Công trình thương mại",
          "Công trình trụ sở",
        ],
        datasets: [
          {
            data: [605, 30, 40, 16, 50, 20, 100, 20],
            backgroundColor: [
              "#41B883",
              "#E46651",
              "#00D8FF",
              "#DD1B16",
              "#ee850f",
              "#9907e1",
              "#f80f84",
              "#d1ee16",
            ],
            borderWidth: 0,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
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
