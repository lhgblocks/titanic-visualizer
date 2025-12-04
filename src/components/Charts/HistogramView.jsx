import { useMemo } from "react";
import Chart from "react-apexcharts";
import "./HistogramView.scss";

export default function HistogramView({ data = [] }) {
  const chartData = useMemo(() => {
    const categories = data.map((item) => `Class ${item.pclass}`);
    const series = [
      {
        name: "Survivors",
        data: data.map((item) => item.survivors),
      },
    ];

    return { categories, series };
  }, [data]);

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: chartData.categories,
        title: {
          text: "Passenger Class",
        },
      },
      yaxis: {
        title: {
          text: "Number of Survivors",
        },
      },
      title: {
        text: "Survivors by Class",
        align: "center",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
        },
      },
      dataLabels: {
        enabled: true,
      },
    }),
    [chartData]
  );

  return (
    <div className="histogram-view">
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="bar"
        height={400}
      />
    </div>
  );
}

