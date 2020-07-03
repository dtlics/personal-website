import React from "react";
import { Result, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound-wrapper">
      <Row type="flex" justify="center">
        <Col xl={21} xs={22}>
          <Result
            status="404"
            title="本页面暂无数据"
            subTitle="S艹."
            extra={
              <Link to="/">
                <Button type="primary">Back Home</Button>
              </Link>
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;
