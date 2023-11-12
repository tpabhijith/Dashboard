"use client";
import React, { useEffect } from "react";
import GridLayout from "react-grid-layout";
import BarChart from "./graph/BarChart";
import Spark from "../screens/graph/Spark";
import Spiral from "../screens/graph/Spiral";
import LineChart from "../screens/graph/LineChart";
import styles from "../screens/styles/styles";
import { Typography } from "@mui/material";

const Dashboard = ({ dashData, onLayoutChange }) => {
    function renderCharts() {
        return dashData.charts.map((chart) => {
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
                        {/* <EditableText i={chart.key} defaultValue={chart.heading}/> */}
                    </div>
                    {/* {chart.graph} */}
                    {renderGraph(chart.key)}
                </div>
            );
        });
    }

    function renderGraph(key) {
        return key === "spark" ? (
            <Spark />
        ) : key === "spiral" ? (
            <Spiral />
        ) : key === "lineChart" ? (
            <LineChart />
        ) : key === "stats" ? (
            <BarChart />
        ) : null;
    }

    return (
        <>
            <GridLayout
                rowHeight={30}
                width={1670}
                verticalCompact={true}
                compactType={"vertical"}
                onLayoutChange={onLayoutChange}
                draggableHandle=".dragMe"
            >
                {renderCharts()}
            </GridLayout>
        </>
    );
};

export default Dashboard;
