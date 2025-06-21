import React from "react";
import Accordion from "../../components/Accordion";
import AccordionItem from "../../components/Accordion/AccordionItem";

const AccordianPage: React.FC = () => {
  return (
    <div id="accordian-page" className="accordion-page" >
    <Accordion allowMultiple>
      <AccordionItem title="Item 1">Content 1</AccordionItem>
      <AccordionItem title="Item 2">Content 2</AccordionItem>
      <AccordionItem title="Item 3">Content 3</AccordionItem>
    </Accordion>
    </div>
  );
};

export default AccordianPage;
