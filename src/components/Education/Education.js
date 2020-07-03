import React from "react";
import { Row, Col , Timeline} from "antd";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="home-wrapper">
      <Row type="flex" justify="center">
        <Col xl={21} xs={22}>
          <Timeline mode="left">
            <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">
              Solve initial network problems
            </Timeline.Item>
            <Timeline.Item>Technical testing</Timeline.Item>
            <Timeline.Item label="2015-09-01 09:12:11">
              Network problems being solved
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
