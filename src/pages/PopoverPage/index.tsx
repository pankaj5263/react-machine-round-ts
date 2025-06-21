import React, { useState } from "react";
import Popover from "../../components/Popover";

const PopoverPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className="popover-page">
      <div>
        <div>Popover</div>
        <button onClick={()=> handleOpen(true)}>Click to open popover</button>
        <Popover title={"popover title"} isOpen={open} onClose={handleClose}>
          <div>Popover content</div>
        </Popover>
      </div>
    </div>
  );
};

export default PopoverPage;
