import React from "react";
import { Row, Col, Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import { blogData } from "./blogData";

const Blog = () => {
  return (
    <div className="home-wrapper">
      <Row type="flex" justify="center">
        <Col xl={21} xs={22}>
          {blogData.map((data, i) => {
            return (
              <Comment
                // actions={actions}
                key={i}
                author={<span style={{ color: "#7f6b4e" }}>Dantong Li</span>}
                avatar={
                  <Avatar
                    src="https://personal-dantong.s3.amazonaws.com/avatar.jpeg"
                    alt="Dantong Li"
                  />
                }
                content={<p>{data.content}</p>}
                datetime={
                  <Tooltip title={data.time}>
                    <span>
                      {moment(data.time, "YYYY-MM-DD HH:mm").fromNow()}
                    </span>
                  </Tooltip>
                }
              />
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
