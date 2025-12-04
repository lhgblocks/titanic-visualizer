import { mockHistogramData } from "../data/mock/mockHistogramData";
import HistogramView from "../components/Charts/HistogramView";
import "./HistogramPage.scss";

export default function HistogramPage() {
  return (
    <div className="histogram-page">
      <h2>Histogram Page</h2>
      <p>This page displays the histogram of survivors by class.</p>
      <HistogramView data={mockHistogramData} />
    </div>
  );
}
