import React, { useState, type ReactElement, isValidElement, Children } from "react";
import AccordionItem, { type AccordionItemProps } from "./AccordionItem";

interface AccordionProps {
  children: ReactElement<typeof AccordionItem>[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ children, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  const cloned = Children.map(children, (child, index) => {
    if (isValidElement<AccordionItemProps>(child)) {
      return React.cloneElement(child, {
        index,
        isOpen: openIndexes.includes(index),
        onToggle: () => handleToggle(index),
      });
    }
    return child;
  });

  return <div className="accordian">{cloned}</div>;
};

export default Accordion;
