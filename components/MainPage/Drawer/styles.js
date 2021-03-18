import { Col } from "antd";
import styled from "styled-components";

export const Wrapper = styled.nav`
  min-height: 100vh;
`;

export const SiderCol = styled(Col)`
  background: #011529;
  border-right: 5px solid #1C8EF9;
`;

export const Header = styled.div`
  position: relative;
  padding: 15px;
  padding-left: 100px;
`;

export const HeaderImage = styled.img`
  position: absolute;
  top: 18px;
  left: 15px;
  width: 64px;
  height: 64px;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #017b9b;
  /*color: #61dbfb;*/
`;

export const Nav = styled.nav``;
