import { mockLineChartData } from "../data/mock/mockLineChartData";
import LineChartView from "../components/Charts/LineChartView";
import "./LineChartPage.scss";

export default function LineChartPage() {
  return (
    <div className="line-chart-page">
      <h2>Line Chart Page</h2>
      <p>This page displays the Age × Fare chart.</p>
      <LineChartView data={mockLineChartData} />
    </div>
  );
}
