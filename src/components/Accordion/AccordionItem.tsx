import React from "react";

export interface AccordionItemProps {
  title: string;
  index?: number;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  index,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="accordian-item">
      <div className="accordian-title" onClick={onToggle}>
        <span>{isOpen ? "▲" : "▼"} </span> <span>{title}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
