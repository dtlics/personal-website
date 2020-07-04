import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Tooltip } from "antd";
import {
  UserOutlined,
  ContainerOutlined,
  RobotOutlined,
  BookOutlined,
  IdcardOutlined,
  MailOutlined,
  WechatOutlined,
  SkypeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  NotificationOutlined
} from "@ant-design/icons";

import "./Header.css";

export const Header = (props) => {
  const [current, setCurrent] = useState("About Me");

  const handleClick = (e) => {
    //   console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="header-wrapper">
      <Link
        className="header-logo"
        to="/"
        onClick={() => {
          setCurrent("About Me");
        }}
      >
        <img
          src="https://personal-dantong.s3.amazonaws.com/signature.png"
          alt="img"
          height="36px"
        ></img>
      </Link>

      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="header-menu"
      >
        <Menu.Item key="About Me" icon={<UserOutlined />}>
          <Link to="/">About Me</Link>
        </Menu.Item>
        <Menu.Item key="Education" icon={<ContainerOutlined />}>
          <Link to="/education">Education</Link>
        </Menu.Item>
        <Menu.Item key="Blog" icon={<NotificationOutlined />}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="Projects" icon={<RobotOutlined />}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="Publications" icon={<BookOutlined />}>
          <Link to="/publications">Publications</Link>
        </Menu.Item>
        <Menu.SubMenu icon={<IdcardOutlined />} title="Contact">
          <Menu.Item key="contact:1" icon={<MailOutlined />}>
            <a
              href="mailto:dtlics2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </Menu.Item>
          <Menu.Item key="contact:2" icon={<GithubOutlined />}>
            <a
              href="https://github.com/dtlics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Menu.Item>
          <Menu.Item key="contact:3" icon={<WechatOutlined />}>
            <Tooltip
              title="ldt05180722"
              autoAdjustOverflow
            >
              Wechat
            </Tooltip>
          </Menu.Item>
          <Menu.Item key="contact:4" icon={<SkypeOutlined />}>
            <a
              href="https://join.skype.com/invite/g5SngcGe13HJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skype
            </a>
          </Menu.Item>
          <Menu.Item key="contact:5" icon={<FacebookOutlined />}>
            <a
              href="https://www.facebook.com/profile.php?id=100030241907360"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </Menu.Item>
          <Menu.Item key="contact:6" icon={<LinkedinOutlined />}>
            <a
              href="https://www.linkedin.com/in/dantong-li-85b36818a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};
