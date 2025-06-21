import React from "react";
import Content from "./Content";

const PopoverMain = ({ title, content, onClose }) => {
  return (
    <div className="popover-main">
      <div className="popover-title">
        <div>{title}</div>
      </div>

      <Content content={content} />
      <div>
        <div className="popover-close" onClick={onClose}>Close</div>
      </div>
    </div>
  );
};

export default PopoverMain;
