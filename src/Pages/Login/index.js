import React from "react";
import { Logo56 } from "../../Assets";
import { Gap } from "../../Components/Atoms";
import { Typography, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";

const Login = () => {
  const { Title } = Typography;
  return (
    <div className="container">
      <div className="login-wrapper d-flex justify-content-center align-items-center">
        <div className="col-4">
          <div className="header">
            <img src={Logo56} alt="logo-sangrai-kopi" />
            <Gap height={8} />
            <Title level={3}>Masuk Admin Sangrai Kopi</Title>
          </div>
          <Gap height={16} />
          <Form layout="vertical" name="normal_login" className="login-form">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Gap height={4} />
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Gap height={8} />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button d-flex col-12 justify-content-center"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
