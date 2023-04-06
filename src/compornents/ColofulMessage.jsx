import React from "react";

const ColofulNessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColofulNessage;
