import React from "react";

interface AccordionContentProps {
  id: string;
  labelledBy: string;
  children: React.ReactNode;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ id, labelledBy, children }) => {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      style={{ padding: "0.5rem 1rem", backgroundColor: "#f9f9f9", borderTop: "1px solid #ccc" }}
    >
      {children}
    </div>
  );
};

export default AccordionContent;
