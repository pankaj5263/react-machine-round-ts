import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndex = (value) => {
    setTabIndex(value);
  };

  const tabList = children.map((tab, index) => {
    return <button onClick={() => handleTabIndex(index)}>{tab.props.label}</button>;
  });

  return (
    <>
      {tabList}
      <div>
      {children[tabIndex]}
      </div>
    </>
  );
};

export default Tabs;
