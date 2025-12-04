import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import TablePage from "../pages/TablePage";
import LineChartPage from "../pages/LineChartPage";
import HistogramPage from "../pages/HistogramPage";
import { routes } from "./routesConfig";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main shared layout */}
        <Route element={<MainLayout />}>
          {/* Redirect root route to /table */}
          <Route path="/" element={<Navigate to="/table" replace />} />

          {/* Internal routes from config */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          {/* 404 Page */}
          <Route
            path="*"
            element={<h2 style={{ padding: "2rem" }}>404 - Page not found</h2>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

