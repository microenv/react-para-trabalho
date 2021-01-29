import { Affix, Col, Menu, Row } from "antd";
import { List } from "antd/lib/form/Form";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import getYoutubeVideoId from "../../utils/getYoutubeVideoId";
import CardVideo from "../CardVideo";
import FalcorMap from "../FalcorMap";
import MainPage from "../MainPage";
import MainPageTitle from "../MainPageTitle";
import * as S from "./styles";

export default function TrainingPage({
  currentMenu,
  siderLinkPrefix = "",
  trainingData,
  topicData,
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
      <>
        <MainPageTitle title={topicData.title} />
        <FalcorMap
          data={videos}
          wrapperBuilder={({ children }) => <Row>{children}</Row>}
          itemBuilder={({ key, value: { title, description, url } }) => {
            return (
              <Col lg={8}>
                <CardVideo
                  youtubeId={getYoutubeVideoId(url)}
                  title={title}
                  description={description}
                />
              </Col>
            );
          }}
        />
      </>
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
                    <Menu
                      mode="inline"
                      theme="dark"
                      defaultSelectedKeys={[topicData && topicData.slug]}
                    >
                      {children}
                    </Menu>
                  )}
                  itemBuilder={({ key, $__path, value: { title } }) => {
                    const slug = $__path[$__path.length - 1];
                    return (
                      <Menu.Item key={slug}>
                        <a href={`${siderLinkPrefix}/${slug}`}>{title}</a>
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
