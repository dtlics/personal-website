import React from "react";
import { Row, Col, Timeline, Card, Tooltip, Tag, Divider} from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { transcriptData } from './hkuTranscriptData';

import "./Education.css";

const colorTable = {
  "A+": "#7f6b4e",
  A: "#98805D",
  "A-": "#B19E81",
  "B+": "#C1B19A",
  "Pass": "#D0C4B3",
  postGrad: "#4C412F"
};

const Education = () => {
    const gridStyle = {
      width: "25%",
      textAlign: "center",
    };
  return (
    <div className="home-wrapper education" style={{ marginTop: "2em" }}>
      <Card title="Education Timeline" headStyle={{ color: "#7f6b4e" }}>
        <Row type="flex" justify="center">
          <Col xl={21} xs={22}>
            <Timeline mode="left">
              <Timeline.Item label="2015-09-01">
                Nankai Secondary School, CQ, China
              </Timeline.Item>
              <Timeline.Item label="2018-09-01">
                The University of Hong Kong
              </Timeline.Item>
              <Timeline.Item label="2019-10-01">
                Being a Co-Executive Member of{" "}
                <a
                  href="https://richku.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span style={{ color: "#1DA57A" }}>RIC</span>
                </a>
                , HKU
              </Timeline.Item>
              <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              >
                more to update...
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xl={21} xs={22}>
            <p style={{ color: "grey", fontSize: "10px", textAlign: "center" }}>
              *Note: All timestamps indicates the beginning date of events.
            </p>
          </Col>
        </Row>
      </Card>

      <Card title="HKU Transcript:" headStyle={{ color: "#7f6b4e" }}>
        <Row type="flex" justify="left">
          <Col xl={21} xs={22}>
            <Tag color="#4C412F">PostGrad Course</Tag>
            <Tag color="#7f6b4e">A+</Tag>
            <Tag color="#98805D">A</Tag>
            <Tag color="#B19E81">A-</Tag>
            <Tag color="#C1B19A">B+</Tag>
            <Tag color="#D0C4B3">Pass</Tag>
          </Col>
        </Row>
        <Divider />
        {transcriptData.map((data, i) => {
          let color;
          if (data.isPostGrad) {
            color = colorTable.postGrad;
          } else {
            color = colorTable[data.grade];
          }
          return (
            <Tooltip title={data.grade + ": " + data.courseName}>
              <Card.Grid
                key={i}
                style={{ backgroundColor: color, ...gridStyle }}
              >
                {data.courseCode}
              </Card.Grid>
            </Tooltip>
          );
        })}
        {/* <Card.Grid style={gridStyle}>Content</Card.Grid> */}
      </Card>
    </div>
  );
};

export default Education;
