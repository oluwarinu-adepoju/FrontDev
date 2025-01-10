// src/components/Chart/Chart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './Chart.module.css'

const ChartComponent = ({ type, data, options, chartId }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if(chartRef.current) {
           chartInstance.current = new Chart(chartRef.current, {
                type: type,
                data: data,
                options: options,
            }); 
        }
        return () => {
            if(chartInstance.current) {
              chartInstance.current.destroy();  
            }
        };
    }, [data, options, type, chartId])

    return (
        <canvas id={chartId} ref={chartRef} className={styles.canvas}/>
    );
};

export default ChartComponent;