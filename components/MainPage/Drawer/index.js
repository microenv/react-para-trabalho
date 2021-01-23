import React, { useState } from "react";
import * as S from "./styles";
import styled from "styled-components";
import sidemenus from "../sidemenus";
import { Divider, Menu, Layout } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export default function Drawer({ currentMenu, children, noPadding }) {
  const onClickMenu = (e) => {
    console.log("click ", e);
  };

  const [collapsed, setCollapsed] = useState(false);

  const contentStyle = noPadding
    ? {}
    : {
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      };

  // contentStyle.borderLeft = "5px solid #61dbfb";

  return (
    <S.Wrapper>
      <Layout hasSider={true}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={290}
          style={{ minHeight: "100vh" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log("onBreakpoint: ", broken);
            setCollapsed(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log("onCollapse", collapsed, type);
          }}
          className="main-sider"
        >
          <S.Header>
            <S.HeaderImage
              src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png"
              alt="React Para Trabalho"
            />
            <S.HeaderTitle>React Para Trabalho</S.HeaderTitle>
            <S.HeaderSubtitle>
              Aprenda React do zero até nível senior
            </S.HeaderSubtitle>
          </S.Header>
          <S.Nav>
            <Menu
              onClick={onClickMenu}
              defaultSelectedKeys={[currentMenu]}
              defaultOpenKeys={[]}
              mode="inline"
              theme="dark"
            >
              {sidemenus.map(({ id, label, icon: Icon, linkTo }, mainIndex) => {
                return (
                  <Menu.Item
                    key={`${id || mainIndex}`}
                    icon={<Icon />}
                    className="drawer-menu-item"
                  >
                    <a href={linkTo}>{label}</a>
                  </Menu.Item>
                );
              })}
            </Menu>
          </S.Nav>
        </Sider>
        <Layout className="site-layout">
          <Content className="site-layout-background" style={contentStyle}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </S.Wrapper>
  );
}
