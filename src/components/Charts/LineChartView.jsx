import { useMemo } from "react";
import Chart from "react-apexcharts";
import "./LineChartView.scss";

export default function LineChartView({ data = [] }) {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => a.age - b.age);
  }, [data]);

  const chartData = useMemo(() => {
    return [
      {
        name: "Fare",
        data: sortedData.map((item) => ({
          x: item.age,
          y: item.fare,
        })),
      },
    ];
  }, [sortedData]);

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "line",

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: true,
        },
      },
      xaxis: {
        title: {
          text: "Age",
        },
        type: "numeric",
      },
      yaxis: {
        title: {
          text: "Fare",
        },
      },
      title: {
        text: "Age × Fare",
        align: "center",
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      markers: {
        size: 5,
      },
      grid: {
        strokeDashArray: 4,
      },
    }),
    []
  );

  return (
    <div className="line-chart-view">
      <Chart options={chartOptions} series={chartData} type="line" height={400} />
    </div>
  );
}
