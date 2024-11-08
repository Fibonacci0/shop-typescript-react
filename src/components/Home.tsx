import React from "react";
import { Card, Col, Row, Button, Typography } from "antd";
import {
  ShoppingCartOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const { Title, Text } = Typography;

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      <Title level={1} className="landing-title">
        Welcome to the MAGAZIN
      </Title>
      <Text className="landing-subtitle">USE API TO MESS WITH PRODUCTS</Text>

      <Row gutter={24} className="options-row">



      <Col span={8}>
          <Link to="/info">
            <Card className="option-card" hoverable>
              <InfoCircleOutlined className="option-icon" />
              <Title level={3}>Learn More</Title>
              <Text>More information on how to mess with products</Text>

              <p>
                <Button type="primary" className="option-button">
                  More Info
                </Button>
              </p>
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/products">
            <Card className="option-card" hoverable>
              <ShoppingCartOutlined className="option-icon" />
              <Title level={3}>Products</Title>
              <Text>Mess with products</Text>

              <p>
                <Button type="primary" className="option-button">
                  Go to Products
                </Button>
              </p>
            </Card>
          </Link>
        </Col>



        <Col span={8}>
          <Link to="/admin">
            <Card className="option-card" hoverable>
              <UserOutlined className="option-icon" />
              <Title level={3}>Admin Panel</Title>
              <Text>Work in progress</Text>

              <p>
                <Button type="primary" className="option-button">
                  Admin Access(well, not really)
                </Button>
              </p>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
