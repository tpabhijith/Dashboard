'use client'
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,BarElement);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Green', 'Yellow',"violet","white","purple"],
    datasets: [{
      label: 'My Dataset',
      data: [30, 10, 20, 40,60,30,80],
      backgroundColor: ['#FF6384', '#36A2EB', '#72C02C', '#FFCE56'],
      borderColor: ['#FF6384', '#36A2EB', '#72C02C', '#FFCE56'],
    }],
  });

  return (
    <div style={{ width: "100%", height: "100%" ,paddingBottom:'50px'}}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: {
            display: true,
            text: 'My Bar Chart',
          },
          legend: {
            display: true,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
          },
        }}
      />
    </div>
  );
};

export default BarChart;
