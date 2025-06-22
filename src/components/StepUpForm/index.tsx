import React, { useState } from "react";

const StepUpForm = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleNext = () => {
    if(tabIndex < children.length-1){
        setTabIndex(tabIndex +1);
    } 
  };

  const handleBack = () => {
    if(tabIndex!==0){
        setTabIndex(tabIndex - 1);
    } 
  };

  const stepElements = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { index, selectedIndex: tabIndex });
  });


  console.log("children.length", tabIndex, children.length);

  const stepCircleElement = (
    <div
      style={{
        height: "500px",
        width: "650px",
        border: "1px solid grey",
        margin: "auto",
      }}
    >
      <div style={styleStep}>{stepElements}</div>
      <div>{stepElements[tabIndex]?.props?.children}</div>
      <div>
        <button onClick={()=> handleBack()}>Back</button>
        <button onClick={()=> handleNext()}>Next</button>
      </div>
    </div>
  );

  return (
    <div>
      {stepCircleElement}
    </div>
  );
};

export default StepUpForm;

const styleStep = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
};
