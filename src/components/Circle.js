import React from "react";

const Circle = ({ color, setStyles }) => {
  let styles = {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    background: color,
  };

  return <div style={styles} onClick={setStyles}></div>;
};

export default Circle;
