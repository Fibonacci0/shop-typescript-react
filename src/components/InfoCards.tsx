import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { DeleteOutlined, InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const InfoCards: React.FC = () => (
  <Row gutter={16} style={{ padding: '20px' }}>
    <Col span={8}>
      <Card 
        title={
          <span>
            <DeleteOutlined style={{ marginRight: 8, color: '#f5222d' }} />
            Delete Product
          </span>
        } 
        bordered={false}
      >
        <Paragraph>
          <Text strong>To remove a product from the store:</Text> Click the delete icon in the product list.
        </Paragraph>
      </Card>
    </Col>
    <Col span={8}>
      <Card 
        title={
          <span>
            <InfoCircleOutlined style={{ marginRight: 8, color: '#1890ff' }} />
            Product Information
          </span>
        } 
        bordered={false}
      >
        <Paragraph>
          <Text strong>To view product details:</Text> Use the info button to see full specifications.
        </Paragraph>
      </Card>
    </Col>
    <Col span={8}>
      <Card 
        title={
          <span>
            <ReloadOutlined style={{ marginRight: 8, color: '#52c41a' }} />
            Update Products
          </span>
        } 
        bordered={false}
      >
        <Paragraph>
          <Text strong>To refresh the product list:</Text> Press <Text code>CTRL + R</Text> or use the page reload option.
        </Paragraph>
      </Card>
    </Col>
  </Row>
);

export default InfoCards;
