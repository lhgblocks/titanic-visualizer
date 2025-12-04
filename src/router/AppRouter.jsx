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
        {/* Layout principal compartilhado */}
        <Route element={<MainLayout />}>
          {/* Redireciona rota raiz para /table */}
          <Route path="/" element={<Navigate to="/table" replace />} />

          {/* Rotas internas vindas do config */}
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          {/* Página 404 */}
          <Route
            path="*"
            element={<h2 style={{ padding: "2rem" }}>404 - Página não encontrada</h2>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

