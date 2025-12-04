import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import "./MainLayout.scss";

export default function MainLayout() {
  return (
    <Container fluid className="main-layout">
      <Row className="g-0">
        <Col xs={12} md={3} className="sidebar-col">
          <Sidebar />
        </Col>
        <Col xs={12} md={9} className="content-col">
          <main className="content">
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
}

