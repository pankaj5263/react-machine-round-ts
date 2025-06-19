
// Accordion.tsx
// ==============================================
// Functional Requirements:
// 1. Users can expand/collapse individual accordion items.
// 2. Support single or multiple open items based on props.
// 3. Toggle content visibility on button click.
// 4. Render dynamic children content.
// 5. Maintain open/closed state in context.
// 6. Use ARIA attributes for accessibility.
//
// Non-Functional Requirements:
// 1. Responsive and works across screen sizes.
// 2. Accessible via screen readers and keyboard.
// 3. Efficient and avoids unnecessary re-renders.
// 4. Customizable via SCSS styles or theming.
// 5. Reusable and scalable design pattern.
// ==============================================


// Accordion.tsx
import React, { useState, createContext, useContext } from "react";
import type {ReactNode} from 'react'

interface AccordionContextType {
  openIndexes: number[];
  toggleIndex: (index: number) => void;
  allowMultiple: boolean;
} // this is the interface for Accrdian context

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  allowMultiple?: boolean;
  children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ allowMultiple = false, children }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return allowMultiple ? [...prev, index] : [index];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openIndexes, toggleIndex, allowMultiple }}>
      <div className="accordion-container">{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  title: string;
  index: number;
  children: ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, index, children }) => {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const { openIndexes, toggleIndex } = context;
  const isOpen = openIndexes.includes(index);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        aria-expanded={isOpen}
        onClick={() => toggleIndex(index)}
      >
        {title} <span>{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className="accordion-body"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

// Accordion.module.scss
/*
.accordion-container {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}

.accordion-header {
  width: 100%;
  text-align: left;
  padding: 1rem;
  background-color: #f7f7f7;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-header:focus {
  outline: 2px solid #007bff;
}

.accordion-body {
  padding: 1rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/
