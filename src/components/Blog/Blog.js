import React from "react";
import { Result, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="home-wrapper">
      <Row type="flex" justify="center">
        <Col xl={21} xs={22}>
          <Result
            status="404"
            title="No Data Available"
            subTitle="The page will be updated ASAP."
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

export default Blog;
