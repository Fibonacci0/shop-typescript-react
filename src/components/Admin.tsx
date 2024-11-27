import React from "react";
import { Card, Col, Row, Button, Typography, Statistic } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DashboardOutlined,
  BarChartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/Admin.css";

const { Title, Text } = Typography;

const AdminPage: React.FC = () => {
  return (
    <div className="admin-container">
      <Title level={1} className="admin-title">
        Welcome to Admin Panel
      </Title>
      <Text className="admin-subtitle">Admin page</Text>

      <Row gutter={[24, 24]} className="admin-options-row">
        {/* Dashboard */}
        <Col span={8}>
          {/* <Link to="/admin/dashboard"> */}
          <Link to="/">
            <Card className="admin-card" hoverable>
              <DashboardOutlined className="admin-icon" />
              <Title level={3}>Dashboard</Title>
              <Text>View overall store performance and stats</Text>

              <p>
                <Button type="primary" className="admin-button">
                  Go to Dashboard
                </Button>
              </p>
            </Card>
          </Link>
        </Col>

        {/* Products */}
        <Col span={8}>
          <Link to="/products">
            <Card className="admin-card" hoverable>
              <ShoppingCartOutlined className="admin-icon" />
              <Title level={3}>Products</Title>
              <Text>Manage and update your products</Text>

              <p>
                <Button type="primary" className="admin-button">
                  Go to Products
                </Button>
              </p>
            </Card>
          </Link>
        </Col>

        {/* Users */}
        <Col span={8}>
          <Link to="/register">
            <Card className="admin-card" hoverable>
              <UserOutlined className="admin-icon" />
              <Title level={3}>Register</Title>
              <Text>Register a new account</Text>

              <p>
                <Button type="primary" className="admin-button">
                  Go to Registration
                </Button>
              </p>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className="admin-options-row" style={{ marginTop: "40px" }}>
        {/* Orders Management */}
        <Col span={8}>
          <Link to="/admin/orders">
            <Card className="admin-card" hoverable>
              <UnorderedListOutlined className="admin-icon" />
              <Title level={3}>Orders</Title>
              <Text>Manage and track customer orders</Text>

              <p>
                <Button type="primary" className="admin-button">
                  View Orders
                </Button>
              </p>
            </Card>
          </Link>
        </Col>

        {/* Analytics */}
        <Col span={8}>
          <Link to="/admin/analytics">
            <Card className="admin-card" hoverable>
              <BarChartOutlined className="admin-icon" />
              <Title level={3}>Analytics</Title>
              <Text>View sales performance and statistics</Text>

              <p>
                <Button type="primary" className="admin-button">
                  Go to Analytics
                </Button>
              </p>
            </Card>
          </Link>
        </Col>

        {/* Admin Stats */}
        <Col span={8}>
          <Card className="admin-card" hoverable>
            <Statistic
              title="Total Orders"
              value={1128}
              precision={0}
              valueStyle={{ color: '#4096ff' }}
            />
            <Statistic
              title="Total Sales"
              value={8800.99}
              precision={2}
              prefix="$"
              valueStyle={{ color: '#3f8600' }}
            //  red color #cf1322
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
