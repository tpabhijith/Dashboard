"use client"
import BarChart from "@/screens/graph/BarChart";
import LineChart from "@/screens/graph/LineChart";
import Spark from "@/screens/graph/Spark";
import Spiral from "@/screens/graph/Spiral";
// import { json } from "stream/consumers";
import CircularJSON from 'circular-json';
import { create } from "zustand";

export const usePostStore = create((set) => ({
  dashboards: [
    {
      id: 1,
      name: "Dashboard",
      tittle: "title object",
      charts: [
        {
          key: 'spark',
          dataGrid: { x: 0, y: 0, w: 3, h: 3, static: true },
          graph: <Spark />,
          // static: false,
          heading: ''
        },
        {
          key: 'spiral',
          dataGrid: { x: 0, y: 0, w: 3, h: 6 },
          graph: <Spiral />,
          static: true,
          heading: 'Spiral Chart'
        },
        {
          key: 'lineChart',
          dataGrid: { x: 3, y: 0, w: 4, h: 9 },
          graph: <LineChart />,
          heading: 'Line Chart'

        },
        {
          key: 'stats',
          dataGrid: { x: 0, y: 1, w: 4, h: 11 },
          graph: <BarChart />,
          heading: 'Bar Chart'

        }
      ],
      dashboard_settings: {
        primary_color: "#000",
        secondary_color: "red",
      },
    },
  ],
  addPost: (newDashboard) => {
    set((state) => {
      const updatedDashboards = [...state.dashboards, newDashboard];
      localStorage.setItem('dashboards', JSON.stringify(updatedDashboards));
      return { dashboards: updatedDashboards };
    });
  },
  updatePost: (updatedDashboard) => {
    set((state) => {
      let updatedDashboards = [...state.dashboards];
      updatedDashboards.forEach((item, index) => {
        console.log(item, "item")
        if (item.id === updatedDashboard.id) {
          updatedDashboards[index] = updatedDashboard
          return
        }

      });
      localStorage.setItem('dashboards', JSON.stringify(updatedDashboards));
      return { dashboards: updatedDashboards }
    })

  },
  addLocal: (allPost) => {
    set((state) => {
      return { dashboards: allPost };
    });
  },
  deleteDashboard: (id) => {
    set((state) => {
      const updatedDashboards = state.dashboards.filter((item) => item.id !== id);
      localStorage.setItem('dashboards', JSON.stringify(updatedDashboards));
      return { dashboards: updatedDashboards };

    })
  }



}));

