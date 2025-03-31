import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PieElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PieElement,
  Title,
  Tooltip,
  Legend
);
const pie = () => {
  const pieChartData = {
    labels: ["facebook", "Instagram", "Twitter", "Youtube", "LinkedIn"],
    datasets: [
      {
        label: "Time Spent",
        data: [120, 60, 30, 90, 45],
        backdropClasses: [
          "rgba(255,99,132,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(75,192,192,0.2)",
          "rgba(153,102,255,0.2)",
        ],
        hoverOffest: 4,
      },
    ],
  };

  const options = {};
  return <Pie options={options} data={pieChartData} />;
};

export default pie;
