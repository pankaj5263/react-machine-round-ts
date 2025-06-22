import React from "react";

const Step = ({ index, selectedIndex }) => {

    console.log("count===1", index);
  const circle = (
    <>
      <div style={{...styleStep}}>
        <div style={styleStepChild}>{index+1}</div>
      </div>
    </>
  );


  if(index <= selectedIndex && index !==0){
    return (
        <>
          <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <div style={{ width: "calc(100% - 50px)" }}>
              <div style={{ border: "1px solid green" }}></div>
            </div>
    
            {circle}
          </div>
        </>
      );
  }

  return circle;

};

export default Step;

const styleStep = {
  height: "50px",
  border: "2px solid green",
  width: "50px",
  borderRadius: "50%",
  minWidth: "50px"
};

const styleStepChild = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
};
