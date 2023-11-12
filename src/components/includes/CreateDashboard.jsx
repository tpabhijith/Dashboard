"use client";
import React, { useEffect, useState, useMemo } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
import BarChart from "../../screens/graph/BarChart";
import Spark from "../../screens/graph/Spark";
import Spiral from "../../screens/graph/Spiral";
import LineChart from "../../screens/graph/LineChart";
import styles from "../../screens/styles/styles";
import { Typography } from "@mui/material";
import { usePostStore } from "../../store/Posts";

const CreateDashboard = ({ dashData, onLayoutChange }) => {
    const { dashboards, changeItem } = usePostStore((state) => state);

    const [chartData, setCharts] = useState([
        {
            key: "spark",
            dataGrid: { x: 0, y: 0, w: 3, h: 3, static: true },
            graph: <Spark />,
            // static: false,
            heading: "",
        },
        {
            key: "spiral",
            dataGrid: { x: 0, y: 0, w: 3, h: 6 },
            graph: <Spiral />,
            static: true,
            heading: "Spiral Chart",
        },
        {
            key: "lineChart",
            dataGrid: { x: 3, y: 0, w: 4, h: 9 },
            graph: <LineChart />,
            heading: "Line Chart",
        },
        {
            key: "stats",
            dataGrid: { x: 0, y: 1, w: 4, h: 11 },
            graph: <BarChart />,
            heading: "Bar Chart",
        },
    ]);

    return (
        <>
            <ReactGridLayout
                rowHeight={30}
                width={1670}
                verticalCompact={true}
                compactType={"vertical"}
                draggableHandle=".dragMe"
                onLayoutChange={onLayoutChange}
            >
                {chartData?.map((chart) => {
                    return (
                        <div
                            key={chart.key}
                            data-grid={{ ...chart.dataGrid }}
                            style={styles.box}
                        >
                            <div className={"heading"}>
                                <div className={"dragMe"} />
                                <Typography sx={{ color: "#fff" }}>
                                    {chart.heading}
                                </Typography>
                            </div>
                            {chart.graph}
                        </div>
                    );
                })}
            </ReactGridLayout>
        </>
    );
};

export default CreateDashboard;
