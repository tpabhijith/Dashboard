'use client'
import React, { useEffect, useState } from 'react'
import { usePostStore } from '../../../store/Posts'
import { usePathname } from 'next/navigation'
import { Dashboard } from '../../../screens'
import CreateHeader from '@/components/includes/CreateHeader'
const page = () => {
    const pathname = usePathname();
    const [dashData, setDashData] = useState({
        id: 1,
        name: "Dashboard",
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
    const id = pathname.split("/")[2];
    const dashboards = usePostStore((state) => state.dashboards);
    const updatePost = usePostStore((state) => state.updatePost)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {

        await dashboards.filter((item) => item.id == id).map((data) => {
            setDashData(data)
        })
    }


    const onLayoutChange = (props) => {
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
        updatePost(dashData)
    }
    return (
        <div>
            <CreateHeader dashData={dashData} setDashData={setDashData} handleSave={handleSave} />
            <Dashboard dashData={dashData} onLayoutChange={onLayoutChange} />
        </div>
    )
}

export default page