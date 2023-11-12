import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,RadialLinearScale} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);
const Spiral = () => {
  const data = {
    labels: ["Red", "Blue", "Green", "Yellow"],
    datasets: [
      {
        label: "My Dataset",
        data: [50, 30, 20, 10],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return (
    <div  style={{ width: "100%", height: "100%" ,paddingBottom:'50px'}}>
      <Radar
        data={data}
        options={{
          responsive: true,
          title: {
            display: true,
            text: "My Radar Chart",
          },
          legend: {
            display: true,
          },
        }}
      />
    </div>
  );
};

export default Spiral;
