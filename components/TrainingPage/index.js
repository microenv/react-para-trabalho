import { Col, Menu, Row } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import FalcorArray from "../FalcorArray";
import MainPage from "../MainPage";
import * as S from "./styles";

export default function TrainingPage({ currentMenu, training }) {
  return (
    <MainPage currentMenu={currentMenu} noPadding>
      <div className="page-content noPadding">
        <Row>
          <Col xs={{ span: 0 }} sm={{ span: 10 }} md={{ span: 7 }}>
            <div style={{ background: "red" }}>
              <Sider
                trigger={null}
                width={"100%"}
                style={{ minHeight: "100vh" }}
                className="training-sider"
              >
                <FalcorArray
                  data={training}
                  wrapperBuilder={({ children }) => (
                    <Menu mode="inline" theme="dark">
                      {children}
                    </Menu>
                  )}
                  itemBuilder={({ key, value: { trainingTitle } }) => {
                    return <Menu.Item key={key}>{trainingTitle}</Menu.Item>;
                  }}
                />
              </Sider>
            </div>
          </Col>
          <Col sm={{ span: 14 }} md={{ span: 17 }}>
            <div style={{ background: "orange" }}>content</div>
          </Col>
        </Row>
        <pre>{JSON.stringify(training, null, 2)}</pre>
      </div>
    </MainPage>
  );
}
