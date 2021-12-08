import { Layout, Typography, Menu, Avatar, Dropdown, Modal } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Logo56 } from "../../../Assets";
import { Gap } from "../../Atoms";
import "./AdminNav.css";
import {
  BarChartOutlined,
  VideoCameraOutlined,
  FileOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Container } from "react-bootstrap";

const AdminNav = ({ title, selectedMenu, ...props }) => {
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);

  //   const handleRouteDashboard = () => {
  //     <Link to="/dashboard" />;
  //   };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // const Modal = (

  // );

  const menu = (
    <Menu className="user-dropdown">
      <Menu.Item>
        <a onClick={showModal}>Profil</a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider 
        style={{
         overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
        }}
      theme="light" className="side-bar"
      >
        <div className="brand d-flex flex-row justify-content-center align-items-center">
          <img src={Logo56} alt="logo-sangrai-kopi" className="brand-logo" />
          <Gap width={8} />
          <Title  level={5}>Sangrai Kopi</Title>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={[selectedMenu]}>
          <Menu.Item key="dashboard" icon={<BarChartOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          <Menu.Item key="product" icon={<VideoCameraOutlined />}>
            <Link to="/product">Product</Link>
          </Menu.Item>
          <Menu.Item key="pages" icon={<FileOutlined />}>
            <Link to="/pages">Pages</Link>
          </Menu.Item>
          <Menu.Item key="recipe" icon={<FileOutlined />}>
            <Link to="/recipe">Recipe</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '85%' }}>
          <div className="header-content d-flex ">
            <div className="col-6 my-auto">
              <Title level={4} className="text-light">
                {title}
              </Title>
            </div>
            <div className="col-6">
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                trigger={["click"]}
              >
                <div className="user-admin d-flex justify-content-end align-items-center">
                  <Avatar size={32} icon={<UserOutlined />} />
                  <Gap width={8} />
                  <p className="text-light align-self-center">Admin 1</p>
                  <Gap width={8} />
                  <CaretDownOutlined size={12} className="text-light" />
                </div>
              </Dropdown>
              <Modal
                title="Profil Admin"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Name: Admin 1</p>
                <p>Username: sangraikopi</p>
                <p>Passwrod: kopi123</p>
              </Modal>
            </div>
          </div>
        </Header>
        <Content>
          <Container style={{ marginTop:50}}>{props.children}</Container>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminNav;
