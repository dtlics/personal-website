import React from "react";
import { Spin, Icon } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        marginTop: "3em",
      }}
    >
      <Spin
        delay={500}
        indicator={
          <Icon
            type="loading"
            style={{ fontSize: "50px", color: "#7f6b4e" }}
            spin
          />
        }
      />
    </div>
  );
};

export default Loading;
