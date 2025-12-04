import { useMemo } from "react";
import titanicData from "../data/titanic.json";
import { getHistogramData } from "../data/processData";
import HistogramView from "../components/Charts/HistogramView";
import "./HistogramPage.scss";

export default function HistogramPage() {
  const histogramData = useMemo(() => getHistogramData(titanicData), []);

  return (
    <div className="histogram-page">
      <h2>Histogram Page</h2>
      <p>This page displays the histogram of survivors by class.</p>
      <HistogramView data={histogramData} />
    </div>
  );
}
