import React from "react";
import { Gap } from "../../Components/Atoms";
import AdminNav from "../../Components/Organisms/AdminNav";
import { Typography, Button, Space, Table } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/charts";
import { Nav } from "react-bootstrap";
import "./Recipe.css";

const Recipe = () => {
  // Table data
  const columns = [
    {
      title: "Name Guide",
      dataIndex: "nameGuide",
      key: "nameGuide",
    },
    {
      title: "Guide Type",
      dataIndex: "guideType",
      key: "guideType",
    },
    {
      title: "Batch Date",
      dataIndex: "batchDate",
      key: "batchDate",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key:"aksi",
      render: (text, record) => (
        <Space size="middle">
          <a href="#">View</a>
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ];

  const dataTable = [
    {
      key: "0",
      nameGuide: "Brewing Guide White Batch 1",
      guideType: "Guide White",
      batchDate: "03/12/2021",
    },
    {
      key: "1",
      nameGuide: "Brewing Guide Black Batch 1",
      guideType: "Guide Black",
      batchDate: "03/12/2021",
    },
    {
      key: "2",
      nameGuide: "Brewing Guide White Batch 1",
      guideType: "Guide White",
      batchDate: "03/12/2021",
    },
    {
      key: "3",
      nameGuide: "Brewing Guide White Batch 1",
      guideType: "Guide White",
      batchDate: "03/12/2021",
    },
  ];
  // End table data  
  
  return (
    <AdminNav title="Recipe" selectedMenu="recipe">
      <div className="page-visits-section">
        <Gap height={16} />
        <div className="table">
            <Table columns={columns} dataSource={dataTable} />
        </div>
      </div>
    </AdminNav>
  );
};

export default Recipe;
