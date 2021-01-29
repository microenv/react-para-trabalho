import { Affix, Col, Menu, Row } from "antd";
import { List } from "antd/lib/form/Form";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import FalcorMap from "../FalcorMap";
import MainPage from "../MainPage";
import * as S from "./styles";

export default function TrainingPage({
  currentMenu,
  siderLinkPrefix = "",
  topics,
  children,
  videos,
  articles,
}) {
  let content;

  if (children) {
    content = children;
  } else {
    // @TODO ~ List Articles
    content = (
      <FalcorMap
        data={videos}
        wrapperBuilder={({ children }) => <Row>{children}</Row>}
        itemBuilder={({ key, value: { title, description, url } }) => {
          return (
            <Col lg={8}>
              {title}
              <br />
              {description}
              <br />
              {url.split("/").pop()}
            </Col>
          );
        }}
      />
    );
  }

  return (
    <MainPage currentMenu={currentMenu} noPadding>
      <div className="page-content noPadding">
        <Row>
          <Col xs={{ span: 0 }} sm={{ span: 10 }} md={{ span: 6 }}>
            <Affix>
              <Sider
                trigger={null}
                width={"100%"}
                style={{ minHeight: "100vh" }}
                className="training-sider"
              >
                <FalcorMap
                  data={topics}
                  wrapperBuilder={({ children }) => (
                    <Menu mode="inline" theme="dark">
                      {children}
                    </Menu>
                  )}
                  itemBuilder={({ key, $__path, value }) => {
                    const slug = $__path[$__path.length - 1];
                    return (
                      <Menu.Item key={key}>
                        <a href={`${siderLinkPrefix}/${slug}`}>{value.title}</a>
                      </Menu.Item>
                    );
                  }}
                />
              </Sider>
            </Affix>
          </Col>
          <Col sm={{ span: 14 }} md={{ span: 18 }}>
            {content}
            {/* <pre>{JSON.stringify(topics, null, 2)}</pre> */}
          </Col>
        </Row>
      </div>
    </MainPage>
  );
}
