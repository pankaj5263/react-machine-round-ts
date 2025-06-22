import React from "react";

const Step = ({ index, selectedIndex }) => {
  const isActive = index <= selectedIndex;

  const circleStyle = {
    ...styleStep,
    backgroundColor: isActive ? "#e6ffe6" : "white",
    borderColor: isActive ? "green" : "#ccc",
  };

  return (
    <div style={circleStyle}>
      <div style={styleStepChild}>{index + 1}</div>
    </div>
  );
};

export default Step;

const styleStep = {
  height: "50px",
  border: "2px solid green",
  width: "50px",
  borderRadius: "50%",
  minWidth: "50px",
};

const styleStepChild = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
};
