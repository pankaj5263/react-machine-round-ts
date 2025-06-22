import React, { useState } from "react";

const StepUpForm = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleNext = () => {
    if (tabIndex < children.length - 1) {
      setTabIndex(tabIndex + 1);
    }
  };

  const handleBack = () => {
    if (tabIndex !== 0) {
      setTabIndex(tabIndex - 1);
    }
  };

  const stepElements = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { index, selectedIndex: tabIndex })
  );

  return (
    <div
      style={{
        height: "500px",
        width: "650px",
        border: "1px solid grey",
        margin: "auto",
        padding: "20px",
      }}
    >
      <div style={styleStepWrapper}>
        {stepElements.map((step, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div style={styleConnector(tabIndex, i)}></div>
            )}
            {step}
          </React.Fragment>
        ))}
      </div>

      <div style={{ padding: "20px", minHeight: "100px" }}>
        {stepElements[tabIndex]?.props?.children}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleBack} disabled={tabIndex === 0}>Back</button>
        <button onClick={handleNext} disabled={tabIndex === children.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default StepUpForm;

const styleStepWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "30px",
};

const styleConnector = (tabIndex, i) => ({
  flex: 1,
  height: "2px",
  backgroundColor: i <= tabIndex ? "green" : "#ccc",
  margin: "0 10px",
});
