import { useMemo } from "react";
import Chart from "react-apexcharts";
import "./LineChartView.scss";

export default function LineChartView({ data = [] }) {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aStart = parseInt(a.ageGroup.split("-")[0], 10);
      const bStart = parseInt(b.ageGroup.split("-")[0], 10);
      return aStart - bStart;
    });
  }, [data]);

  const chartData = useMemo(() => {
    return [
      {
        name: "Average Fare",
        data: sortedData.map((item) => ({
          x: item.ageGroup,
          y: item.fare,
        })),
      },
    ];
  }, [sortedData]);

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "line",
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { enabled: true },
      },
      xaxis: {
        title: { text: "Age Group" },
        type: "category",
      },
      yaxis: {
        title: { text: "Average Fare" },
      },
      title: {
        text: "Average Fare by Age Group",
        align: "center",
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      markers: {
        size: 6,
      },
      grid: {
        strokeDashArray: 4,
      },
    }),
    []
  );

  return (
    <div className="line-chart-view">
      <Chart
        options={chartOptions}
        series={chartData}
        type="line"
        height={400}
      />
    </div>
  );
}
