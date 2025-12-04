import { useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import { routes } from "../../router/routesConfig";
import "./Sidebar.scss";

const Sidebar = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRouteChange = useCallback(
    (event) => {
      const selectedPath = event.target.value;
      navigate(selectedPath);
    },
    [navigate]
  );

  const currentPath = location.pathname;
  const currentValue = routes.find((route) => route.path === currentPath)?.path || routes[0].path;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Titanic Visualizer</h3>
      </div>
      <div className="sidebar-content">
        <Form.Select
          value={currentValue}
          onChange={handleRouteChange}
          className="route-selector"
        >
          {routes.map((route) => (
            <option key={route.path} value={route.path}>
              {route.label}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;

