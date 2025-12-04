import { useMemo } from "react";
import titanicData from "../data/titanic.json";
import { getLineChartData } from "../data/processData";
import LineChartView from "../components/Charts/LineChartView";
import "./LineChartPage.scss";

export default function LineChartPage() {
  const lineChartData = useMemo(() => getLineChartData(titanicData), []);

  return (
    <div className="line-chart-page">
      <h2>Line Chart Page</h2>
      <p>This page displays the Age × Fare chart.</p>
      <LineChartView data={lineChartData} />
    </div>
  );
}
