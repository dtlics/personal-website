import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./Header.css";

export const Header = () => {
  const [current, setCurrent] = useState("About Me");

  const handleClick = (e) => {
    //   console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="About Me" icon={<MailOutlined />}>
        About Me
      </Menu.Item>
      <Menu.Item key="Education" icon={<AppstoreOutlined />}>
        Education
      </Menu.Item>
      <Menu.Item key="Projects" icon={<AppstoreOutlined />}>
        Projects
      </Menu.Item>
      <Menu.Item key="Publications">Publications</Menu.Item>
    </Menu>
  );
};