import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale ,LinearScale,PointElement,LineElement} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement,LineElement);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My Dataset",
        data: [50, 60, 70, 80, 90, 100],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "100%" ,paddingBottom:'50px'}}>
      <Line
        data={data}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "My Line Chart",
          },
          legend: {
            display: true,
          },
        }}
      />
    </div>
  );
};

export default LineChart;
