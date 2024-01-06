import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MissionChart = ({ missionData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (missionData.length > 0) {
      const successfulMissions = missionData.filter(
        (mission) => mission.successful
      ).length;
      const failedMissions = missionData.length - successfulMissions;

      // console.log('Successful:', successfulMissions);
      // console.log('Failed:', failedMissions);

      const newChartData = {
        labels: ['Successful', 'Failed'],
        datasets: [
          {
            label: 'Mission Outcomes',
            data: [successfulMissions, failedMissions],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
          },
        ],
      };

      if (chartRef.current) {
        // Check if chart instance exists, destroy it before creating a new one
        if (myChart) {
          myChart.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        myChart = new Chart(ctx, {
          type: 'pie',
          data: newChartData,
        });
      }
    }

    return () => {
      //cleaning up the chart instance when the component unmounts
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [missionData]);

  return (
    <div>
      <h2>Mission Chart</h2>
      <canvas
        id="missionChart"
        ref={chartRef}
        style={{ width: '150px', height: '150px' }}
      />
    </div>
  );
};

export default MissionChart;
