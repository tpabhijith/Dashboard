"use client"
import React, { useState } from "react";
import CreateDashboard from "../../components/includes/CreateDashboard";
import CreateHeader from '../../components/includes/CreateHeader';
import { usePostStore } from '../../store/Posts'

const page = () => {
  const addPost = usePostStore((state) => state.addPost)
  const { dashboards } = usePostStore();
  const [name, setName] = useState("");



  const [dashData, setDashData] = useState({
    name: "",
    tittle: "title object",
    charts: [
      {
        key: 'spark',
        dataGrid: { x: 0, y: 0, w: 3, h: 3, static: true },
        heading: ''
      },
      {
        key: 'spiral',
        dataGrid: { x: 0, y: 0, w: 3, h: 6 },
        static: true,
        heading: 'Spiral Chart'
      },
      {
        key: 'lineChart',
        dataGrid: { x: 3, y: 0, w: 4, h: 9 },
        heading: 'Line Chart'

      },
      {
        key: 'stats',
        dataGrid: { x: 0, y: 1, w: 4, h: 11 },
        heading: 'Bar Chart'

      }
    ],
    dashboard_settings: {
      primary_color: "#000",
      secondary_color: "red",
    },
  })


  const onLayoutChange = (props) => {
    console.log(props, "layout");
    const updatedCharts = dashData.charts.map((chart, index) => {
      const prop = props[index];
      const updatedChart = { ...chart };

      if (prop) {
        updatedChart.dataGrid = {
          x: prop.x,
          y: prop.y,
          w: prop.w,
          h: prop.h,
          static: prop.static,
        };
      }

      return updatedChart;
    });

    const updatedConfig = { ...dashData, charts: updatedCharts };

    setDashData(updatedConfig)
  };

  const handleSave = () => {
    setDashData((prev) => ({ ...prev, id: dashboards.length + 1 }))
    addPost({ ...dashData, id: dashboards.length + 1 })
  }
  return (
    <div>
      <CreateHeader dashData={dashData} setDashData={setDashData} handleSave={handleSave} />
      <CreateDashboard dashData={dashData} onLayoutChange={onLayoutChange} />
    </div>
  );
};

export default page;
