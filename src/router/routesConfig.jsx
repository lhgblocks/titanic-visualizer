import TablePage from "../pages/TablePage";
import LineChartPage from "../pages/LineChartPage";
import HistogramPage from "../pages/HistogramPage";

export const routes = [
  {
    path: "/table",
    label: "Raw Table",
    element: <TablePage />,
  },
  {
    path: "/line-chart",
    label: "Line Chart",
    element: <LineChartPage />,
  },
  {
    path: "/histogram",
    label: "Histogram",
    element: <HistogramPage />,
  },
];

