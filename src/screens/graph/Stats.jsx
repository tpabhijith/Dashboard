import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);
const Stats = () => {
    const doughnutData = {
        labels: ["Red", "Blue", "Green", "Yellow"],
        datasets: [{
          data: [30, 10, 20, 40],
          backgroundColor: ["#FF6384", "#36A2EB", "#72C02C", "#FFCE56"],
        }],
      };
  return (
    <div>
        <Doughnut data={doughnutData} />
    </div>
  )
}

export default Stats