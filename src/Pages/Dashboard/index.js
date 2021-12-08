import React from "react";
import { Gap } from "../../Components/Atoms";
import AdminNav from "../../Components/Organisms/AdminNav";
import { Typography, Button, Table } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/charts";
import { Nav } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  // Table data
  const columns = [
    {
      title: "Name Page",
      dataIndex: "namePage",
      key: "namePage",
    },
    {
      title: "Page Views",
      dataIndex: "pageViews",
      key: "pageViews",
    },
  ];

  const dataTable = [
    {
      key: "0",
      namePage: "sangraikopi.com/produk/robusta",
      pageViews: 520,
    },
    {
      key: "1",
      namePage: "sangraikopi.com/produk/arabica",
      pageViews: 520,
    },
    {
      key: "2",
      namePage: "sangraikopi.com/produk/mecania",
      pageViews: 520,
    },
  ];
  // End table data

  // Chart data
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  // End chart data

  const { Title } = Typography;

  return (
    <AdminNav title="Dashboard" selectedMenu="dashboard">
      <Gap height={24} />
      <div className="chart-section">
        <div className="header-content d-flex flex-row justify-content-between align-items-lg-start">
          <div className="header">
            <Title level={4}>Visitors Website</Title>
            <Gap height={4} />
            <p>
              {" "}
              <ArrowDownOutlined /> 10.57% from last month{" "}
            </p>
          </div>
          <div className="tab">
            <Nav variant="pills" defaultActiveKey="#">
              <Nav.Item>
                <Nav.Link href="#">Month</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Week</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <Gap height={16} />
        <div className="chart-section">
          <Line {...config} />
        </div>
      </div>
      <Gap height={36} />
      <div className="page-visits-section">
        <div className="header d-flex flex-row justify-content-between align-items-start">
          <Title level={4}>Page Visits</Title>
          <Button type="link">Lihat Semua</Button>
        </div>
        <Gap height={16} />
        <div className="table">
          <Table columns={columns} dataSource={dataTable} />
        </div>
      </div>
    </AdminNav>
  );
};

export default Dashboard;
