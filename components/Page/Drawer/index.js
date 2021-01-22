import React, { useState } from "react";
import * as S from "./styles";
import styled from "styled-components";
import sidemenus from "../../../config/sidemenus";
import { Divider, Menu, Layout } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export default function Drawer({ currentMenu }) {
  const onClickMenu = (e) => {
    console.log("click ", e);
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <S.Wrapper>
      <Layout hasSider={true}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={350}
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
              defaultSelectedKeys={[]}
              defaultOpenKeys={[]}
              mode="inline"
              theme="dark"
            >
              {sidemenus.map(({ id: menuId, title, menus }, mainIndex) => {
                const menuContent = menus.map(
                  ({ icon: Icon, id, label }, menuIndex) => {
                    return (
                      <Menu.Item key={`${menuId}${menuIndex}`} icon={<Icon />}>
                        {label}
                      </Menu.Item>
                    );
                  }
                );

                if (title) {
                  return (
                    <SubMenu title={title} key={`${menuId}`}>
                      {menuContent}
                    </SubMenu>
                  );
                }

                return menuContent;
              })}
            </Menu>
          </S.Nav>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </S.Wrapper>
  );
}
